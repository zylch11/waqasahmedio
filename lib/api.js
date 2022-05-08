import client from './sanity';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  'author': author->{name, 'avatar': avatar.asset->url},
  date,
  'coverImage': coverImage.asset->url
`

export async function getAllBlogs() {
  const results = await client
    .fetch(`*[_type == "blog"]{ ${blogFields} }`);
  return results;
}