export const metadata = {
  title: "Basic Next.js App",
  description: "A simple Next.js 14 starter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
