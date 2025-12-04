export const metadata = {
  title: "Dashboard | ShopSphere",
};

export default function DashboardPage() {
  return (
    <section className="section">
      <h1>Store dashboard</h1>
      <p className="muted">
        Placeholder dashboard where you can later show orders, revenue, and customers.
      </p>
      <div className="grid-3">
        <div className="stat-card">
          <p className="stat-label">Today&apos;s revenue</p>
          <p className="stat-value">₹32,400</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Orders</p>
          <p className="stat-value">14</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Conversion</p>
          <p className="stat-value">3.4%</p>
        </div>
      </div>
    </section>
  );
}
