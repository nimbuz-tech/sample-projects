import Link from "next/link";

export const metadata = {
  title: "Login | LearnHub",
};

export default function LoginPage() {
  return (
    <section className="section auth-shell">
      <div className="auth-card">
        <h1>Sign in</h1>
        <p className="muted">
          Access your courses and keep your progress in sync.
        </p>

        <form className="form-vertical">
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>

          <button type="button" className="btn btn-primary btn-block">
            Continue
          </button>
        </form>

        <p className="muted-small">
          New here?{" "}
          <Link href="/auth/register" className="link-inline">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
}
