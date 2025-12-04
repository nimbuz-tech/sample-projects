import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "ShopSphere | Modern E-Commerce UI",
  description: "Sample Next.js e-commerce frontend with multiple pages and polished styling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body-root">
        <Navbar />
        <main className="shell main-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
