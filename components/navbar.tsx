import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/10 text-white flex items-center justify-between p-4">
      <h2 className="text-2xl font-bold">Electron + NextJS</h2>

      <div className="flex space-x-4">
        <Link
          href="/"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
        >
          Home
        </Link>
        <Link
          href="/hello"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
        >
          Hello
        </Link>
      </div>
    </nav>
  );
}
