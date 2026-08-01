revoke execute on function public.rls_auto_enable() from public, anon, authenticated;

create index timeline_media_asset_order_idx on public.timeline_media (media_asset_id, sort_order);

drop policy "published pages are public" on public.pages;
drop policy "public timeline entries are readable" on public.timeline_entries;
drop policy "public media assets are readable" on public.media_assets;
drop policy "public timeline media links are readable" on public.timeline_media;
drop policy "site settings are public" on public.site_settings;

create policy "published pages are public" on public.pages for select to anon using (status = 'published');
create policy "public timeline entries are readable" on public.timeline_entries for select to anon using (visibility = 'public');
create policy "public media assets are readable" on public.media_assets for select to anon using (visibility = 'public');
create policy "public timeline media links are readable" on public.timeline_media for select to anon using (
  exists (select 1 from public.timeline_entries e where e.id = timeline_entry_id and e.visibility = 'public')
  and exists (select 1 from public.media_assets m where m.id = media_asset_id and m.visibility = 'public')
);
create policy "site settings are public" on public.site_settings for select to anon using (true);
