import { client } from "@repo/prisma/client";

export default async function Home() {

  const user = await client.user.findFirst()

  return (
    <div>
      <p>Name is: {user?.username || "Anuj"}</p>
      <p>Email is: {user?.email || "anuj@test"}</p>
      <p>Password is: {user?.password}</p>
    </div>
  );
}
