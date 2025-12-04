export default function DashboardHome() {
  return (
    <section className="section">
      <h1>Welcome back 👋</h1>
      <p>Here is a quick snapshot of your learning activity.</p>

      <div className="grid-3">
        <div className="stat-card">
          <p className="stat-label">Courses in progress</p>
          <p className="stat-value">3</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Lessons completed</p>
          <p className="stat-value">12</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Current streak</p>
          <p className="stat-value">4 days 🔥</p>
        </div>
      </div>
    </section>
  );
}
