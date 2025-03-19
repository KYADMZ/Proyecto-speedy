import "./globals.css";
import NAV from "./components/nav"
import FOOTER from "./components/footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <NAV />
        {children}
        <FOOTER />
      </body>
    </html>
  );
}
