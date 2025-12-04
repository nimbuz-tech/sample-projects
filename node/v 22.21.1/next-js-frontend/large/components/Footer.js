import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer-shell">
      <div className="shell footer-inner">
        <p className="muted-small">
          © {new Date().getFullYear()} LearnHub. For demo use only.
        </p>

        <div className="footer-links">
          <Link href="/courses">Courses</Link>
          <Link href="/instructors">Instructors</Link>
          <Link href="/auth/login">Login</Link>
        </div>
      </div>
    </footer>
  );
}
