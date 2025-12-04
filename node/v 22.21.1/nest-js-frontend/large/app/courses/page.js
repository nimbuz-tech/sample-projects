import { CourseGrid } from "../../components/CourseGrid";

export const metadata = {
  title: "Courses | LearnHub",
};

export default function CoursesPage() {
  return (
    <section className="section">
      <header className="section-header">
        <h1>All Courses</h1>
        <p>
          Explore curated learning paths in web development, cloud platforms,
          DevOps, and more.
        </p>
      </header>
      <CourseGrid showDescription />
    </section>
  );
}
