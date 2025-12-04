import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h2>Welcome to the Sample Next.js App 🚀</h2>
      <p>
        This is a slightly larger demo application showing multiple pages,
        nested routes, and a simple blog.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Read the Blog</h3>
          <p>Check out example blog posts with dynamic routes.</p>
          <Link href="/blog" className="button">Go to Blog</Link>
        </div>
        <div className="card">
          <h3>Dashboard</h3>
          <p>Example of a nested layout with its own navigation.</p>
          <Link href="/dashboard" className="button">Open Dashboard</Link>
        </div>
        <div className="card">
          <h3>Contact</h3>
          <p>See a basic contact page with a simple form UI.</p>
          <Link href="/contact" className="button">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
