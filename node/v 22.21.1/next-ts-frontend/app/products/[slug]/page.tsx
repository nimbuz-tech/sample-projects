import Link from "next/link";
import { products } from "../../../components/data";

type ProductParams = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }: ProductParams) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <section className="section">
        <h1>Product not found</h1>
        <p className="muted">
          The product you&apos;re looking for doesn&apos;t exist or has been archived.
        </p>
        <Link href="/products" className="btn btn-primary">
          Back to products
        </Link>
      </section>
    );
  }

  return (
    <section className="section section-detail">
      <div className="detail-main">
        <p className="pill pill-soft">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="detail-subtitle">{product.description}</p>

        <div className="pill-row">
          <span>{product.tagline}</span>
          <span>{product.delivery}</span>
        </div>

        <h2>What&apos;s included</h2>
        <ul className="bulleted">
          {product.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Perfect for</h2>
        <ul className="bulleted">
          {product.for.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <aside className="detail-aside">
        <div className="detail-card">
          <p className="detail-price">₹{product.price.toLocaleString()}</p>
          <p className="detail-note">incl. GST • one-time purchase</p>
          <button className="btn btn-primary btn-block">Add to cart</button>
          <button className="btn btn-ghost btn-block">Buy now</button>
          <p className="detail-fineprint">
            Demo checkout only — wire this up to your own payment provider.
          </p>
        </div>
        <div className="detail-card muted">
          <h3>Highlights</h3>
          <ul className="checklist">
            {product.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
