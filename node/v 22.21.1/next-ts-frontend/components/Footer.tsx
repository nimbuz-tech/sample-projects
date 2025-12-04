import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer-shell">
      <div className="shell footer-inner">
        <p className="muted-small">
          © {new Date().getFullYear()} ShopSphere. Demo UI only.
        </p>
        <div className="footer-links">
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/auth/login">Login</Link>
        </div>
      </div>
    </footer>
  );
}
