import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "LearnHub | Modern Learning Platform",
  description: "Sample Next.js learning platform with multiple pages and modern UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body-bg">
        <Navbar />
        <main className="shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
