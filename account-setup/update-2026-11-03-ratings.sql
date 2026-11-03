-- Run once after schema.sql. Adds ratings without changing existing account/settings data.
begin;
create table public.recipe_ratings (
  user_id uuid not null references auth.users(id) on delete cascade,
  recipe_id text not null check (recipe_id ~ '^[a-z0-9_]{1,100}$'),
  stars smallint not null check (stars between 1 and 5),
  updated_at timestamptz not null default now(),
  primary key (user_id, recipe_id)
);
alter table public.recipe_ratings enable row level security;
alter table public.recipe_ratings force row level security;
revoke all on public.recipe_ratings from public, anon, authenticated;
grant select on public.recipe_ratings to authenticated;
-- PostgREST upsert supplies the key columns too. RLS prevents ownership changes.
grant insert (user_id, recipe_id, stars), update (user_id, recipe_id, stars)
  on public.recipe_ratings to authenticated;
create policy own_ratings_read on public.recipe_ratings for select to authenticated
  using ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create policy own_ratings_insert on public.recipe_ratings for insert to authenticated
  with check ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create policy own_ratings_update on public.recipe_ratings for update to authenticated
  using ((select auth.uid()) = user_id and (select public.cook_account_verified()))
  with check ((select auth.uid()) = user_id and (select public.cook_account_verified()));
create trigger ratings_timestamp before update on public.recipe_ratings
  for each row execute function public.cook_settings_timestamp();
commit;
