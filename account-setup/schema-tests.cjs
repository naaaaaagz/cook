/* Disposable in-memory PostgreSQL verification; never connects to hosted Supabase.
   Requires @electric-sql/pglite on NODE_PATH. Auth fixtures model Supabase's roles. */
const {PGlite}=require('@electric-sql/pglite');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
async function main(){
  const db=new PGlite();
  const a='00000000-0000-4000-8000-000000000001',b='00000000-0000-4000-8000-000000000002',c='00000000-0000-4000-8000-000000000003';
  try{
    await db.exec(`create role anon; create role authenticated;
      create schema auth; create table auth.users(id uuid primary key,email text,email_confirmed_at timestamptz);
      create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
      grant usage on schema auth to authenticated; grant execute on function auth.uid() to authenticated;
      insert into auth.users values ('${a}','peter@gmail.com',now()),('${b}','peter+something@gmail.com',now()),('${c}','unconfirmed@example.test',null);`);
    await db.exec(fs.readFileSync(path.join(__dirname,'schema.sql'),'utf8'));
    await db.exec(fs.readFileSync(path.join(__dirname,'update-2026-11-03-ratings.sql'),'utf8'));
    const prefs={layout:null,layoutSaved:false,layoutTouched:false,layoutWide:true,textures:true,lang:'en-US',theme:'light',units:'metric'};
    async function asUser(id,sql,values=[]){await db.exec('set role authenticated');await db.query("select set_config('request.jwt.claim.sub',$1,false)",[id]);return db.query(sql,values);}
    await asUser(a,'insert into public.user_settings(user_id,preferences) values($1,$2)',[a,prefs]);
    await asUser(b,'insert into public.user_settings(user_id,preferences) values($1,$2)',[b,{...prefs,theme:'dark'}]);
    assert.equal((await asUser(a,'select * from public.user_settings')).rows.length,1);
    assert.equal((await asUser(a,'select * from public.user_settings where user_id=$1',[b])).rows.length,0);
    await assert.rejects(()=>asUser(a,'insert into public.user_settings(user_id,preferences) values($1,$2)',[c,prefs]),/row-level security/);
    assert.equal((await asUser(a,'update public.user_settings set preferences=$1 where user_id=$2 returning user_id',[prefs,b])).rows.length,0);
    await assert.rejects(()=>asUser(a,'update public.user_settings set user_id=$1 where user_id=$2',[c,a]),/row-level security/);
    await assert.rejects(()=>asUser(c,'insert into public.user_settings(user_id,preferences) values($1,$2)',[c,prefs]),/row-level security/);
    assert.equal((await asUser(c,'select * from public.user_settings')).rows.length,0);
    // PostgreSQL/PostgREST upsert needs UPDATE permission on both supplied columns.
    await asUser(a,'insert into public.user_settings(user_id,preferences) values($1,$2) on conflict(user_id) do update set user_id=excluded.user_id,preferences=excluded.preferences',[a,{...prefs,units:'imperial'}]);
    assert.equal((await asUser(a,'select preferences from public.user_settings')).rows[0].preferences.units,'imperial');
    for(const bad of [{...prefs,password:'never-here'},{...prefs,theme:null},{...prefs,units:null},{...prefs,layoutSaved:true},{...prefs,layout:{countertop:{x:0,y:0,w:4,h:1}}}]){
      await assert.rejects(()=>asUser(a,'update public.user_settings set preferences=$1 where user_id=$2',[bad,a]),/check constraint/);
    }
    await assert.rejects(()=>asUser(a,'update public.user_settings set updated_at=now()'),/permission denied/);
    await assert.rejects(()=>asUser(a,'delete from public.user_settings'),/permission denied/);
    await db.exec('reset role; set role anon');
    await assert.rejects(()=>db.query('select * from public.user_settings'),/permission denied/);
    await assert.rejects(()=>db.query('select * from public.recipe_ratings'),/permission denied/);
    await assert.rejects(()=>db.query('insert into public.recipe_ratings(user_id,recipe_id,stars) values($1,$2,$3)',[a,'spaghetti_carbonara',3]),/permission denied/);
    await asUser(a,'insert into public.recipe_ratings(user_id,recipe_id,stars) values($1,$2,$3)',[a,'spaghetti_carbonara',5]);
    await asUser(b,'insert into public.recipe_ratings(user_id,recipe_id,stars) values($1,$2,$3)',[b,'spaghetti_carbonara',2]);
    await asUser(a,'insert into public.recipe_ratings(user_id,recipe_id,stars) values($1,$2,$3) on conflict(user_id,recipe_id) do update set user_id=excluded.user_id,recipe_id=excluded.recipe_id,stars=excluded.stars',[a,'spaghetti_carbonara',4]);
    assert.deepEqual((await asUser(a,'select recipe_id,stars from public.recipe_ratings')).rows,[{recipe_id:'spaghetti_carbonara',stars:4}]);
    assert.equal((await asUser(a,'select * from public.recipe_ratings where user_id=$1',[b])).rows.length,0);
    assert.equal((await asUser(a,'update public.recipe_ratings set stars=1 where user_id=$1 returning *',[b])).rows.length,0);
    await assert.rejects(()=>asUser(a,'insert into public.recipe_ratings(user_id,recipe_id,stars) values($1,$2,$3)',[b,'another_recipe',3]),/row-level security/);
    await assert.rejects(()=>asUser(a,'update public.recipe_ratings set user_id=$1 where user_id=$2',[c,a]),/row-level security/);
    await assert.rejects(()=>asUser(c,'insert into public.recipe_ratings(user_id,recipe_id,stars) values($1,$2,$3)',[c,'spaghetti_carbonara',3]),/row-level security/);
    assert.equal((await asUser(c,'select * from public.recipe_ratings')).rows.length,0);
    for(const stars of [0,6,null,1.5]) await assert.rejects(()=>asUser(a,'insert into public.recipe_ratings(user_id,recipe_id,stars) values($1,$2,$3)',[a,'invalid_recipe',stars]));
    await assert.rejects(()=>asUser(a,'update public.recipe_ratings set updated_at=now()'),/permission denied/);
    await db.exec('reset role');
    await db.query('delete from auth.users where id=$1',[a]);
    assert.equal((await db.query('select * from public.user_settings where user_id=$1',[a])).rows.length,0);
    assert.equal((await db.query('select * from public.recipe_ratings where user_id=$1',[a])).rows.length,0);
    assert.equal((await db.query('select stars from public.recipe_ratings where user_id=$1',[b])).rows[0].stars,2);
    console.log('PASS: rating ownership, confirmed-only writes, 1–5 range, single-row updates, anonymous denial and deletion cascade.');
    console.log('PASS: actual PostgreSQL schema, anonymous denial, verified-user isolation, cross-user read/write rejection, unverified denial, upsert grants, invalid JSON rejection, metadata protection and deletion cascade. Local Auth fixtures; hosted Supabase still needs live checks.');
  }finally{await db.close();}
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
