import Link from "next/link";
import { CourseGrid } from "../components/CourseGrid";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <span className="badge">New • 2025 Ready</span>
          <h1>Level up your skills with curated tech courses.</h1>
          <p>
            Learn web development, cloud, DevOps, and more with hands-on
            projects, guided paths, and progress tracking.
          </p>

          <div className="hero-actions">
            <Link href="/courses" className="btn btn-primary">
              Browse Courses
            </Link>
            <Link href="/auth/register" className="btn btn-ghost">
              Start for Free
            </Link>
          </div>

          <div className="hero-meta">
            <span>50+ bite-sized lessons</span>
            <span>Project-based learning</span>
            <span>Lifetime access</span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <h3>Your learning snapshot</h3>
            <ul>
              <li>
                <span className="dot dot-green" /> 3 courses in progress
              </li>
              <li>
                <span className="dot dot-blue" /> 12 lessons completed
              </li>
              <li>
                <span className="dot dot-amber" /> 4 streak days 🔥
              </li>
            </ul>
          </div>

          <div className="hero-card secondary">
            <p className="hero-card-label">Next up</p>
            <p className="hero-card-title">Deploying apps on Kubernetes</p>
            <p className="hero-card-meta">Lesson • 12 min watch</p>
          </div>
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2>Popular Courses</h2>
          <Link href="/courses" className="link-inline">
            View all →
          </Link>
        </header>

        <CourseGrid />
      </section>

      <section className="section section-muted">
        <header className="section-header">
          <h2>Why LearnHub?</h2>
        </header>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Hands-on first</h3>
            <p>
              Every course includes practical exercises, mini-projects, and
              real-world examples you can reuse.
            </p>
          </div>

          <div className="feature-card">
            <h3>Always up to date</h3>
            <p>
              Content is updated regularly so you're always learning the
              latest stack and tools.
            </p>
          </div>

          <div className="feature-card">
            <h3>Track progress</h3>
            <p>
              Dashboards, streaks, and completion stats keep you motivated and
              moving forward.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
