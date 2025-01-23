import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { isAuthenticated,getUser } = getKindeServerSession();

  // Redirect to login if not authenticated
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const user = await getUser();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to your profile!</h1>
      <p>Email : {user.email}</p>
      <p>Name : {user.given_name} {user.family_name}</p>
    </div>
  );
}