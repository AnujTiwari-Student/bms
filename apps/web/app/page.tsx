import { client } from "@repo/prisma/client";

export default async function Home() {

  const user = await client.user.findFirst()

  return (
    <div>
      <h1>{user?.username}</h1>
      <p>{user?.email}</p>
      <p>{user?.password}</p>
    </div>
  );
}
