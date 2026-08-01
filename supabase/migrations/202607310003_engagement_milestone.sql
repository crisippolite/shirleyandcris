insert into public.timeline_entries (
  occurred_on,
  date_label,
  title,
  body,
  category,
  visibility,
  featured,
  sort_order,
  metadata
)
select
  '2012-04-15',
  'April 15, 2012',
  'The day we got engaged',
  'Cris proposed in the very same spot where Shirley and Cris first met on July 25, 1997.',
  'engagement',
  'draft',
  true,
  5,
  '{"featured_photo":"IMG_0062.JPG","proposal_location":"the place where we met"}'::jsonb
where not exists (
  select 1
  from public.timeline_entries
  where occurred_on = '2012-04-15'
    and title = 'The day we got engaged'
);
