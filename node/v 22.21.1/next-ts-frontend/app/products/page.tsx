import { ProductGrid } from "../../components/ProductGrid";

export const metadata = {
  title: "Products | ShopSphere",
};

export default function ProductsPage() {
  return (
    <section className="section">
      <header className="section-header">
        <h1>All products</h1>
        <p className="muted">
          Bundles, tools, and credits to help your engineering team move faster.
        </p>
      </header>
      <ProductGrid showDescription />
    </section>
  );
}
