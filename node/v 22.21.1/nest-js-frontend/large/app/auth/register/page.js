import Link from "next/link";

export const metadata = {
  title: "Register | LearnHub",
};

export default function RegisterPage() {
  return (
    <section className="section auth-shell">
      <div className="auth-card">
        <h1>Create your account</h1>
        <p className="muted">
          Join LearnHub and start learning in minutes.
        </p>

        <form className="form-vertical">
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>

          <button type="button" className="btn btn-primary btn-block">
            Get started
          </button>
        </form>

        <p className="muted-small">
          Already have an account?{" "}
          <Link href="/auth/login" className="link-inline">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
