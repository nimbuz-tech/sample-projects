import Link from "next/link";

const posts = [
  { slug: "getting-started-with-nextjs", title: "Getting Started with Next.js", excerpt: "Learn the basics of Next.js and how to build your first app." },
  { slug: "routing-in-nextjs-app-router", title: "Routing in Next.js App Router", excerpt: "Understand the new App Router and how to structure your routes." },
  { slug: "deploying-nextjs-apps", title: "Deploying Next.js Apps", excerpt: "Quick overview of how to deploy Next.js applications to production." },
];

export const metadata = {
  title: "Blog | Sample Next.js App",
};

export default function BlogPage() {
  return (
    <section>
      <h2>Blog</h2>
      <p>Example blog listing page. Click any post to view its content.</p>
      <div className="list">
        {posts.map((post) => (
          <article key={post.slug} className="card">
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="button small">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
