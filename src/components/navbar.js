import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div>
        <nav>
          <Link href="/">Blog view</Link>
          <div>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
