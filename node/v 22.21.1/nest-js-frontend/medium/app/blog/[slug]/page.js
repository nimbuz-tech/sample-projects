import Link from "next/link";

const posts = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js",
    body: "This is a placeholder article. Replace this with your real content.",
  },
  "routing-in-nextjs-app-router": {
    title: "Routing in Next.js App Router",
    body: "Here you can explain nested routes, layouts, loading states, and more.",
  },
  "deploying-nextjs-apps": {
    title: "Deploying Next.js Apps",
    body: "Discuss deployment options such as Vercel, Node servers, or Docker.",
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
        <p>The blog post you are looking for does not exist.</p>
        <Link href="/blog" className="button">Back to Blog</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href="/blog" className="button">← Back to Blog</Link>
    </section>
  );
}
