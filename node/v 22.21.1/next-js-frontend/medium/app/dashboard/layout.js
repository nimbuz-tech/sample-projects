import Link from "next/link";

export const metadata = {
  title: "Dashboard | Sample Next.js App",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3>Dashboard</h3>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard">Overview</Link>
            </li>
            <li>
              <Link href="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="dashboard-content">{children}</div>
    </div>
  );
}
