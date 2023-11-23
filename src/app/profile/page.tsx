import { getServerSession } from "next-auth";

import { authConfig } from "@/configs/authConfig";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <main className="bg-slate-800 px-24 h-screen">
      <h1 className="text-white text-left items-center text-2xl pt-3 font-bold">
        Profile of {session?.user?.name}
      </h1>
      {session?.user?.image && (
        <img className="rounded-lg" src={session.user.image} alt=""></img>
      )}
    </main>
  );
}
