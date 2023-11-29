import { getServerSession } from "next-auth";

import { authOptions } from "@/configs/authConfig";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  return (
    <main className="bg-slate-800 px-20 h-screen">
      <h1 className="text-white text-left items-center text-2xl pt-3 font-bold">
        Profile of {session?.user?.name}
      </h1>
      {session?.user?.image && (
        <img className="rounded-lg" src={session.user.image} alt=""></img>
      )}
    </main>
  );
}
