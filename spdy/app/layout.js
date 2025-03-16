import "./globals.css";
import NAV from "./components/nav"
import FOOTER from "./components/footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <NAV />
        {children}
        <FOOTER />
      </body>
    </html>
  );
}
