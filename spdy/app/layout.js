import "./globals.css";
import NAV from "./components/nav"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <NAV />
        {children}
      </body>
    </html>
  );
}
