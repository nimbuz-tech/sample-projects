import Link from "next/link";

export const metadata = {
  title: "Dashboard | LearnHub",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="dash-layout">
      <aside className="dash-sidebar">
        <h2 className="dash-logo">LearnHub</h2>

        <nav>
          <ul>
            <li>
              <Link href="/dashboard">Overview</Link>
            </li>
            <li>
              <Link href="/dashboard/courses">My Courses</Link>
            </li>
            <li>
              <Link href="/dashboard/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="dash-main">
        {children}
      </div>
    </div>
  );
}
