import "./globals.css";

export const metadata = {
  title: "Geo Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
