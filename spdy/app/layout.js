import "./globals.css";
import NAV from "./components/nav"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NAV></NAV>
      <body className="bg-pink-900">
        {children}
      </body>
    </html>
  );
}
