create extension if not exists pgcrypto;

create table public.cms_members (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('owner', 'editor')),
  created_at timestamptz not null default now()
);

create table public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  eyebrow text,
  intro text,
  body jsonb not null default '[]'::jsonb,
  status text not null default 'draft' check (status in ('draft', 'published')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.timeline_entries (
  id uuid primary key default gen_random_uuid(),
  occurred_on date,
  date_label text not null,
  title text not null,
  body text,
  category text not null default 'life' check (category in ('life', 'travel', 'football', 'pups', 'engagement', 'wedding', 'anniversary')),
  visibility text not null default 'draft' check (visibility in ('draft', 'public')),
  featured boolean not null default false,
  sort_order integer not null default 0,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.media_assets (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('photo', 'video', 'audio', 'document')),
  title text not null,
  alt_text text,
  caption text,
  storage_path text,
  external_url text,
  poster_path text,
  occurred_on date,
  width integer check (width is null or width > 0),
  height integer check (height is null or height > 0),
  duration_seconds numeric check (duration_seconds is null or duration_seconds >= 0),
  featured boolean not null default false,
  visibility text not null default 'draft' check (visibility in ('draft', 'public')),
  sort_order integer not null default 0,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (storage_path is not null or external_url is not null)
);

create table public.timeline_media (
  timeline_entry_id uuid not null references public.timeline_entries(id) on delete cascade,
  media_asset_id uuid not null references public.media_assets(id) on delete cascade,
  sort_order integer not null default 0,
  primary key (timeline_entry_id, media_asset_id)
);

create table public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index timeline_entries_public_order_idx on public.timeline_entries (occurred_on, sort_order) where visibility = 'public';
create index media_assets_public_order_idx on public.media_assets (occurred_on, sort_order) where visibility = 'public';
create index timeline_media_entry_order_idx on public.timeline_media (timeline_entry_id, sort_order);

alter table public.cms_members enable row level security;
alter table public.pages enable row level security;
alter table public.timeline_entries enable row level security;
alter table public.media_assets enable row level security;
alter table public.timeline_media enable row level security;
alter table public.site_settings enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.pages, public.timeline_entries, public.media_assets, public.timeline_media, public.site_settings to anon, authenticated;
grant select on public.cms_members to authenticated;
grant insert, update, delete on public.pages, public.timeline_entries, public.media_assets, public.timeline_media, public.site_settings to authenticated;

create policy "published pages are public" on public.pages for select to anon, authenticated using (status = 'published');
create policy "public timeline entries are readable" on public.timeline_entries for select to anon, authenticated using (visibility = 'public');
create policy "public media assets are readable" on public.media_assets for select to anon, authenticated using (visibility = 'public');
create policy "public timeline media links are readable" on public.timeline_media for select to anon, authenticated using (
  exists (select 1 from public.timeline_entries e where e.id = timeline_entry_id and e.visibility = 'public')
  and exists (select 1 from public.media_assets m where m.id = media_asset_id and m.visibility = 'public')
);
create policy "site settings are public" on public.site_settings for select to anon, authenticated using (true);
create policy "members can read their membership" on public.cms_members for select to authenticated using ((select auth.uid()) = user_id);

create policy "cms members manage pages" on public.pages for all to authenticated
using (exists (select 1 from public.cms_members c where c.user_id = (select auth.uid())))
with check (exists (select 1 from public.cms_members c where c.user_id = (select auth.uid())));
create policy "cms members manage timeline" on public.timeline_entries for all to authenticated
using (exists (select 1 from public.cms_members c where c.user_id = (select auth.uid())))
with check (exists (select 1 from public.cms_members c where c.user_id = (select auth.uid())));
create policy "cms members manage media" on public.media_assets for all to authenticated
using (exists (select 1 from public.cms_members c where c.user_id = (select auth.uid())))
with check (exists (select 1 from public.cms_members c where c.user_id = (select auth.uid())));
create policy "cms members manage timeline media" on public.timeline_media for all to authenticated
using (exists (select 1 from public.cms_members c where c.user_id = (select auth.uid())))
with check (exists (select 1 from public.cms_members c where c.user_id = (select auth.uid())));
create policy "cms members manage settings" on public.site_settings for all to authenticated
using (exists (select 1 from public.cms_members c where c.user_id = (select auth.uid())))
with check (exists (select 1 from public.cms_members c where c.user_id = (select auth.uid())));

insert into public.pages (slug, title, eyebrow, intro, status, sort_order) values
  ('home', 'Shirley + Cris', 'Ten years, and every little date between', 'A story that began on July 25, 1997.', 'draft', 0),
  ('our-story', 'Our Story', 'The beginning', 'How a birthday became the first page of everything.', 'draft', 10),
  ('wedding-day', 'Wedding Day', 'August 27, 2016', 'One thousand weeks to forever and always.', 'draft', 20),
  ('through-the-years', 'Through the Years', 'The pages between', 'Adventures, pups, football, travel, and ordinary magic.', 'draft', 30),
  ('ten-years', 'Ten Years', 'August 27, 2026', 'A new film and so much still ahead.', 'draft', 40)
on conflict (slug) do nothing;

insert into public.timeline_entries (occurred_on, date_label, title, body, category, visibility, featured, sort_order) values
  ('1997-07-25', 'July 25, 1997', 'The day we met', 'Shirley’s birthday—and the first page of the story.', 'life', 'draft', true, 0),
  ('2016-08-27', 'August 27, 2016', 'The day we married', 'One thousand weeks later, at Ramhorn Farm.', 'wedding', 'draft', true, 10),
  ('2026-08-27', 'August 27, 2026', 'Ten years', 'A new film, a new planner, and so much still ahead.', 'anniversary', 'draft', true, 20);

insert into public.site_settings (key, value) values
  ('identity', '{"names":["Shirley","Cris"],"met_on":"1997-07-25","married_on":"2016-08-27","anniversary_on":"2026-08-27","palette":{"ink":"#181313","red":"#c91f2c","paper":"#fffaf2"}}'::jsonb),
  ('publishing', '{"public":true,"indexing":false,"launch_date":"2026-08-27"}'::jsonb)
on conflict (key) do nothing;
