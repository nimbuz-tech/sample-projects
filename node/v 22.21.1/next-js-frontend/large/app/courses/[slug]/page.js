import Link from "next/link";
import { courses } from "../../../components/data";

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default function CourseDetailPage({ params }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return (
      <section className="section">
        <h1>Course not found</h1>
        <p>The course you&apos;re looking for does not exist.</p>
        <Link href="/courses" className="btn btn-primary">
          Back to Courses
        </Link>
      </section>
    );
  }

  return (
    <section className="section section-detail">
      <div className="detail-main">
        <p className="badge">
          {course.level} • {course.category}
        </p>
        <h1>{course.title}</h1>
        <p className="detail-subtitle">{course.description}</p>

        <div className="pill-row">
          <span>{course.lessons} lessons</span>
          <span>{course.duration}</span>
          <span>By {course.instructor}</span>
        </div>

        <h2>What you&apos;ll learn</h2>
        <ul className="bulleted">
          {course.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Curriculum</h2>
        <ol className="curriculum">
          {course.curriculum.map((item) => (
            <li key={item.title}>
              <div>
                <p className="curriculum-title">{item.title}</p>
                <p className="curriculum-meta">
                  {item.type} • {item.length}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <aside className="detail-aside">
        <div className="detail-card">
          <p className="detail-price">₹{course.price.toLocaleString()}</p>
          <p className="detail-note">One-time payment • Lifetime access</p>
          <button className="btn btn-primary btn-block">Enroll now</button>
          <button className="btn btn-ghost btn-block">Add to wishlist</button>
          <p className="detail-fineprint">
            7-day refund guarantee. No recurring charges.
          </p>
        </div>

        <div className="detail-card muted">
          <h3>This course includes</h3>
          <ul className="checklist">
            <li>Downloadable resources</li>
            <li>Completion certificate</li>
            <li>Access on web & mobile</li>
          </ul>
        </div>
      </aside>
    </section>
  );
}
