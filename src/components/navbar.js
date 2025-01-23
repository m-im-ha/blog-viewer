import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  const user = await getUser();
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <Link href="/" className="mr-4 hover:underline">
            Home
          </Link>
          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
        </nav>
        <div>
          {isAuth ? (
            <form action="/api/auth/logout" method="GET">
              <button type="submit" className="hover:underline">
                Logout
              </button>
            </form>
          ) : (
            <Link href="/api/auth/login" className="hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
