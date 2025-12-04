export default function DashboardProfilePage() {
  return (
    <section className="section">
      <h1>Profile</h1>
      <p>Manage your basic account information.</p>

      <form className="form-wide">
        <div className="form-row">
          <label>
            Full name
            <input type="text" defaultValue="Alex Developer" />
          </label>

          <label>
            Email
            <input type="email" defaultValue="alex@example.com" />
          </label>
        </div>

        <div className="form-row">
          <label>
            Role
            <input type="text" defaultValue="Full-stack Engineer" />
          </label>

          <label>
            Learning goal
            <input type="text" defaultValue="Deploy production-grade apps" />
          </label>
        </div>

        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </form>
    </section>
  );
}
