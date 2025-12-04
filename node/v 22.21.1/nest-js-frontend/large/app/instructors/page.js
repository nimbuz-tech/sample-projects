import { instructors } from "../../components/data";

export const metadata = {
  title: "Instructors | LearnHub",
};

export default function InstructorsPage() {
  return (
    <section className="section">
      <header className="section-header">
        <h1>Meet the Instructors</h1>
        <p>
          Learn from engineers and practitioners actively working in the field.
        </p>
      </header>

      <div className="instructor-grid">
        {instructors.map((ins) => (
          <article key={ins.name} className="instructor-card">
            <div className="avatar">{ins.initials}</div>
            <h3>{ins.name}</h3>
            <p className="instructor-role">{ins.role}</p>
            <p className="instructor-bio">{ins.bio}</p>
            <p className="instructor-meta">
              {ins.courses} courses • {ins.experience} yrs experience
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
