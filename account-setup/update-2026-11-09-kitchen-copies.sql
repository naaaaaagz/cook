-- Cook kitchen-items update (2026-11-09). Run once in Supabase: SQL Editor -> New query -> Run,
-- AFTER update-2026-11-06-kitchen-items.sql. No existing data is deleted.
-- Adds: a second copy of any kitchen item (stove2, sink2, pantry2, ...) in a saved kitchen layout.
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
  -- Kitchen items can be removed in the editor; only the main countertop and "Me" are required.
  if not ((p->'layout') ?& array['countertop','me']) then return false; end if;
  for item in select * from pg_catalog.jsonb_each(p->'layout') loop
    -- Each item once more as <item>2; countertops up to three; "Me" only once.
    if item.key not in ('countertop','countertop2','countertop3','me') and item.key !~ ('^(stove|oven|fridge|freezer|microwave|sink|board|'
      || 'airfryer|mixer|blender|kettle|toaster|ricecooker|slowcooker|pressurecooker|foodprocessor|pantry|bin)2?$') then return false; end if;
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

commit;
