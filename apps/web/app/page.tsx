import { client } from "@repo/prisma/client";

export default async function Home() {

  const user = await client.user.findFirst()

  return (
    <div>
      <h1>Fullname: {user?.username}</h1>
      <p>Email is: {user?.email}</p>
      <p>Password is: {user?.password}</p>
    </div>
  );
}
