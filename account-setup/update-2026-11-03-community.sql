-- Cook community update (2026-11-03). Run once in Supabase: SQL Editor -> New query -> Run,
-- AFTER update-2026-10-30.sql and update-2026-11-03-ratings.sql. No existing data is deleted.
-- Adds: removable kitchen items, usernames (display only), private cooking history with personal notes,
-- public comments, public average ratings and a private shopping list.
begin;

-- Saved kitchens may now leave out items (stove, oven, sink...), as the editor allows removing them.
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
  -- Kitchen items can be removed in the editor; only the main countertop and "Me" are required.
  if not ((p->'layout') ?& array['countertop','me']) then return false; end if;
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

-- Usernames: shown next to public comments. Login stays email-based.
create table public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  username text not null check (username = pg_catalog.btrim(username)
    and pg_catalog.char_length(username) between 3 and 30 and username ~ '^[[:alnum:] _.-]+$'),
  updated_at timestamptz not null default now()
);
create unique index profiles_username_unique on public.profiles (pg_catalog.lower(username));
alter table public.profiles enable row level security;
alter table public.profiles force row level security;
revoke all on public.profiles from public, anon, authenticated;
grant select on public.profiles to authenticated;
grant insert (user_id, username), update (user_id, username) on public.profiles to authenticated;
create policy own_profile_read on public.profiles for select to authenticated
  using ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create policy own_profile_insert on public.profiles for insert to authenticated
  with check ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create policy own_profile_update on public.profiles for update to authenticated
  using ((select auth.uid()) = user_id and (select public.cook_account_verified()))
  with check ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create trigger profiles_timestamp before update on public.profiles
  for each row execute function public.cook_settings_timestamp();

-- Private cooking history: one row per finished cook, with an optional personal note.
create table public.cook_history (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  recipe_id text not null check (recipe_id ~ '^[a-z0-9_]{1,100}$'),
  cooked_at timestamptz not null default now(),
  choices jsonb not null check (pg_catalog.jsonb_typeof(choices) = 'object' and pg_catalog.octet_length(choices::text) <= 4000),
  minutes_taken integer not null check (minutes_taken between 0 and 2880),
  minutes_suggested integer not null check (minutes_suggested between 0 and 2880),
  stars smallint check (stars between 1 and 5),
  note text check (pg_catalog.char_length(note) <= 1000)
);
create index cook_history_user on public.cook_history (user_id, cooked_at desc);
alter table public.cook_history enable row level security;
alter table public.cook_history force row level security;
revoke all on public.cook_history from public, anon, authenticated;
grant select, delete on public.cook_history to authenticated;
grant insert (user_id, recipe_id, choices, minutes_taken, minutes_suggested, stars, note) on public.cook_history to authenticated;
grant update (stars, note) on public.cook_history to authenticated;
create policy own_history_read on public.cook_history for select to authenticated
  using ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create policy own_history_insert on public.cook_history for insert to authenticated
  with check ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create policy own_history_update on public.cook_history for update to authenticated
  using ((select auth.uid()) = user_id and (select public.cook_account_verified()))
  with check ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create policy own_history_delete on public.cook_history for delete to authenticated
  using ((select auth.uid()) = user_id);

-- Public comments: written by confirmed users, readable by everyone through the function below.
create table public.recipe_comments (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  recipe_id text not null check (recipe_id ~ '^[a-z0-9_]{1,100}$'),
  body text not null check (pg_catalog.char_length(pg_catalog.btrim(body)) between 1 and 1000),
  created_at timestamptz not null default now()
);
create index recipe_comments_recipe on public.recipe_comments (recipe_id, created_at desc);
alter table public.recipe_comments enable row level security;
alter table public.recipe_comments force row level security;
revoke all on public.recipe_comments from public, anon, authenticated;
grant select, delete on public.recipe_comments to authenticated;
grant insert (user_id, recipe_id, body) on public.recipe_comments to authenticated;
create policy own_comments_read on public.recipe_comments for select to authenticated
  using ((select auth.uid()) = user_id);
create policy own_comments_insert on public.recipe_comments for insert to authenticated
  with check ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create policy own_comments_delete on public.recipe_comments for delete to authenticated
  using ((select auth.uid()) = user_id);

-- Everyone (also guests) can read a recipe's comments: username, text, time and that user's rating.
-- User ids are not exposed; "mine" tells the signed-in author which comments they may delete.
create function public.cook_recipe_comments(p_recipe text)
returns table (id bigint, created_at timestamptz, username text, body text, stars smallint, mine boolean)
language sql stable security definer set search_path = '' as $$
  select c.id, c.created_at, p.username, c.body, r.stars, c.user_id = (select auth.uid())
  from public.recipe_comments c
  left join public.profiles p on p.user_id = c.user_id
  left join public.recipe_ratings r on r.user_id = c.user_id and r.recipe_id = c.recipe_id
  where c.recipe_id = p_recipe
  order by c.created_at desc
  limit 200;
$$;
revoke all on function public.cook_recipe_comments(text) from public;
grant execute on function public.cook_recipe_comments(text) to anon, authenticated;

-- Everyone can read the average rating and number of ratings per recipe (no user data).
create function public.cook_rating_summary()
returns table (recipe_id text, average numeric, votes integer)
language sql stable security definer set search_path = '' as $$
  select recipe_id, pg_catalog.round(pg_catalog.avg(stars), 1), pg_catalog.count(*)::integer
  from public.recipe_ratings group by recipe_id;
$$;
revoke all on function public.cook_rating_summary() from public;
grant execute on function public.cook_rating_summary() to anon, authenticated;

-- Private shopping list: one list per user, stored as a small JSON array.
create function public.cook_valid_shopping(p jsonb)
returns boolean language plpgsql immutable set search_path = '' as $$
begin
  if p is null or pg_catalog.jsonb_typeof(p) <> 'array' or pg_catalog.jsonb_array_length(p) > 300
    or pg_catalog.octet_length(p::text) > 40000 then return false; end if;
  return not exists (select 1 from pg_catalog.jsonb_array_elements(p) e
    where pg_catalog.jsonb_typeof(e) <> 'object' or pg_catalog.jsonb_typeof(e->'name') <> 'string'
      or pg_catalog.char_length(e->>'name') not between 1 and 120);
exception when others then return false;
end;
$$;
create table public.shopping_lists (
  user_id uuid primary key references auth.users(id) on delete cascade,
  items jsonb not null default '[]'::jsonb check (public.cook_valid_shopping(items)),
  updated_at timestamptz not null default now()
);
alter table public.shopping_lists enable row level security;
alter table public.shopping_lists force row level security;
revoke all on public.shopping_lists from public, anon, authenticated;
grant select on public.shopping_lists to authenticated;
grant insert (user_id, items), update (user_id, items) on public.shopping_lists to authenticated;
create policy own_list_read on public.shopping_lists for select to authenticated
  using ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create policy own_list_insert on public.shopping_lists for insert to authenticated
  with check ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create policy own_list_update on public.shopping_lists for update to authenticated
  using ((select auth.uid()) = user_id and (select public.cook_account_verified()))
  with check ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create trigger shopping_timestamp before update on public.shopping_lists
  for each row execute function public.cook_settings_timestamp();

commit;
