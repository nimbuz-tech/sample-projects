import Link from "next/link";
import { products } from "./data";

type ProductGridProps = {
  showDescription?: boolean;
};

export function ProductGrid({ showDescription = false }: ProductGridProps) {
  return (
    <div className="card-grid">
      {products.map((product) => (
        <article key={product.slug} className="card card-product">
          <div className="product-tag-row">
            <span className="pill pill-soft">{product.category}</span>
            {product.badge && (
              <span className="pill pill-accent">{product.badge}</span>
            )}
          </div>
          <h3>{product.name}</h3>
          <p className="muted">{product.tagline}</p>
          {showDescription && (
            <p className="card-desc">{product.description}</p>
          )}
          <div className="product-footer">
            <p className="price">₹{product.price.toLocaleString()}</p>
            <Link
              href={`/products/${product.slug}`}
              className="btn btn-ghost small mt"
            >
              View details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
