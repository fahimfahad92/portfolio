export async function getMediumBlogData() {
  const response = await fetch(process.env.MEDIUM_BLOG_URL, {
    next: { revalidate: 3600 },
  });

  return await response.json();
}
