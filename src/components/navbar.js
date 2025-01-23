import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container bg-slate-700 text-white mx-auto">
      <div>
        <nav className="flex justify-between items-center mx-4 p-2">
          <Link href="/" className="text-2xl">Blog view</Link>
          <div className="space-x-5">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
