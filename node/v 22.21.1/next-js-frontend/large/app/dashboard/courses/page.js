import Link from "next/link";
import { courses } from "../../../components/data";

export default function DashboardCoursesPage() {
  const enrolled = courses.slice(0, 2);

  return (
    <section className="section">
      <h1>My Courses</h1>
      <p>Keep learning where you left off.</p>

      <div className="card-grid">
        {enrolled.map((course) => (
          <article key={course.slug} className="card">
            <h3>{course.title}</h3>
            <p className="muted">
              {course.category} • {course.level}
            </p>

            <p className="progress-label">Progress</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "45%" }} />
            </div>

            <p className="muted-small">Approx. 45% complete</p>

            <Link href={`/courses/${course.slug}`} className="btn btn-ghost small mt">
              Continue learning
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
