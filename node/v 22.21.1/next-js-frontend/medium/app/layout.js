import "./globals.css";

export const metadata = {
  title: "Sample Next.js App",
  description: "A larger example Next.js 14 application with multiple routes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <h1 className="logo">Next Sample</h1>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
              <a href="/dashboard">Dashboard</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Next Sample App</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
