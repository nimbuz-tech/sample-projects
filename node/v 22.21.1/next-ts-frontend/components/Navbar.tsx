"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/cart", label: "Cart" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="nav-shell">
      <div className="shell nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark" />
          <span className="brand-text">ShopSphere</span>
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                "nav-link" + (pathname === item.href ? " nav-link-active" : "")
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link href="/auth/login" className="btn btn-ghost small">
            Login
          </Link>
          <Link href="/auth/register" className="btn btn-primary small">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
