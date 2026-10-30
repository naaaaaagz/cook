-- Update for the EXISTING Cook project (2026-10-30). Run once in Supabase: SQL Editor -> New query -> Run.
-- Safe to run again. No data is deleted.
-- 1. Settings may now include an optional list of favorite recipe ids.
-- 2. Signed-in users can delete their own account after re-entering their password.
begin;

create or replace function public.cook_valid_preferences(p jsonb)
returns boolean language plpgsql immutable set search_path = '' as $$
declare item record; r jsonb; x numeric; y numeric; w numeric; h numeric;
begin
  if p is null or pg_catalog.jsonb_typeof(p) <> 'object' or pg_catalog.octet_length(p::text) > 20000 then return false; end if;
  if not (p ?& array['layout','layoutSaved','layoutTouched','layoutWide','textures','lang','theme','units'])
    or exists (select 1 from pg_catalog.jsonb_object_keys(p) k where k not in
      ('layout','layoutSaved','layoutTouched','layoutWide','textures','lang','theme','units','favorites')) then return false; end if;
  -- Optional favorites: up to 500 recipe ids.
  if p ? 'favorites' and (pg_catalog.jsonb_typeof(p->'favorites') <> 'array' or pg_catalog.jsonb_array_length(p->'favorites') > 500
    or exists (select 1 from pg_catalog.jsonb_array_elements(p->'favorites') e
      where pg_catalog.jsonb_typeof(e) <> 'string' or (e #>> '{}') !~ '^[a-z0-9_]{1,80}$')) then return false; end if;
  if pg_catalog.jsonb_typeof(p->'lang') <> 'string' or pg_catalog.jsonb_typeof(p->'theme') <> 'string'
    or pg_catalog.jsonb_typeof(p->'units') <> 'string' or (p->>'lang') !~ '^[A-Za-z]{2,3}(-[A-Za-z]{2,4})?$'
    or p->>'theme' not in ('light','dark','system') or p->>'units' not in ('metric','imperial') then return false; end if;
  if exists (select 1 from unnest(array['layoutSaved','layoutTouched','layoutWide','textures']) k
    where pg_catalog.jsonb_typeof(p->k) <> 'boolean') then return false; end if;
  if p->'layout' = 'null'::jsonb then return p->'layoutSaved' = 'false'::jsonb; end if;
  if pg_catalog.jsonb_typeof(p->'layout') <> 'object' then return false; end if;
  if not ((p->'layout') ?& array['countertop','stove','oven','fridge','freezer','board','sink','microwave','me']) then return false; end if;
  for item in select * from pg_catalog.jsonb_each(p->'layout') loop
    if item.key not in ('countertop','countertop2','countertop3','stove','oven','fridge','freezer','microwave','sink','board',
      'airfryer','mixer','blender','kettle','toaster','ricecooker','slowcooker','pressurecooker','foodprocessor','me') then return false; end if;
    r := item.value;
    if pg_catalog.jsonb_typeof(r) <> 'object' or not (r ?& array['x','y','w','h']) then return false; end if;
    if exists (select 1 from pg_catalog.jsonb_object_keys(r) k where k not in ('x','y','w','h')) then return false; end if;
    if exists (select 1 from unnest(array['x','y','w','h']) k where pg_catalog.jsonb_typeof(r->k) <> 'number') then return false; end if;
    x := (r->>'x')::numeric; y := (r->>'y')::numeric; w := (r->>'w')::numeric; h := (r->>'h')::numeric;
    if x < 0 or y < 0 or w <= 0 or h <= 0 or x+w > 1.001 or y+h > 1.001 then return false; end if;
  end loop;
  return true;
exception when others then return false;
end;
$$;

-- Delete own account after re-entering the password (checked against the managed Auth hash).
-- Deleting the Auth user also deletes user_settings (on delete cascade).
create or replace function public.cook_delete_account(p_password text)
returns boolean language plpgsql security definer set search_path = '' as $$
declare uid uuid := auth.uid(); stored text;
begin
  if uid is null or p_password is null or pg_catalog.length(p_password) > 200 then return false; end if;
  select encrypted_password into stored from auth.users where id = uid;
  if stored is null or stored = '' or extensions.crypt(p_password, stored) <> stored then return false; end if;
  delete from auth.users where id = uid;
  return true;
end;
$$;
revoke all on function public.cook_delete_account(text) from public, anon;
grant execute on function public.cook_delete_account(text) to authenticated;
commit;
