import Link from "next/link";
import { courses } from "./data";

export function CourseGrid({ showDescription = false }) {
  return (
    <div className="card-grid">
      {courses.map((course) => (
        <article key={course.slug} className="card">
          <p className="badge badge-soft">{course.category}</p>
          <h3>{course.title}</h3>
          <p className="muted">
            {course.level} • {course.duration}
          </p>

          {showDescription && (
            <p className="card-desc">{course.description}</p>
          )}

          <p className="price">₹{course.price.toLocaleString()}</p>

          <Link
            href={`/courses/${course.slug}`}
            className="btn btn-ghost small mt"
          >
            View details
          </Link>
        </article>
      ))}
    </div>
  );
}
