import { getServerSession } from "next-auth";

import { authConfig } from "@/configs/authConfig";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <main className="bg-slate-800 px-20 h-screen">
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt=""></img>}
    </main>
  );
}
