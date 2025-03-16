import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-semibold relative group w-[57px] h-[65px]">
            <img src="/speedyIcon.jpeg" alt="logo" />
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}