import Link from "next/link";
import { ProductGrid } from "../components/ProductGrid";

export default function Home() {
  return (
    <>
      <section className="hero hero-store">
        <div className="hero-copy">
          <span className="pill pill-soft">New • 2025 Ready</span>
          <h1>Everything you need to ship apps, in one store.</h1>
          <p>
            Developer-friendly tools, infra credits, learning bundles and merch —
            curated for modern SaaS teams and indie builders.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="btn btn-primary">
              Browse products
            </Link>
            <Link href="/checkout" className="btn btn-ghost">
              Quick checkout
            </Link>
          </div>
          <div className="hero-meta-row">
            <span>Fast delivery</span>
            <span>Secure payments</span>
            <span>Made for developers</span>
          </div>
        </div>
        <div className="hero-showcase">
          <div className="hero-card">
            <p className="hero-card-label">Featured bundle</p>
            <h3>Infra Starter Pack</h3>
            <p className="hero-card-copy">
              Credits + monitoring + deployment toolkit for early-stage teams.
            </p>
            <p className="hero-card-price">₹8,999</p>
          </div>
          <div className="hero-stats">
            <div>
              <p className="stat-big">4.8</p>
              <p className="stat-label">Avg. rating</p>
            </div>
            <div>
              <p className="stat-big">2K+</p>
              <p className="stat-label">Happy teams</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2>Popular right now</h2>
          <Link href="/products" className="link-inline">
            View all →
          </Link>
        </header>
        <ProductGrid />
      </section>
    </>
  );
}
