"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/instructors", label: "Instructors" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="nav-shell">
      <div className="shell nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark" />
          <span className="brand-text">LearnHub</span>
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
