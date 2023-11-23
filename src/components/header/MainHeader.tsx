"use client";

import Link from "next/link";
import { FC } from "react";
import { useSession, signOut, signIn } from "next-auth/react";

export const MainHeader: FC = () => {
  const session = useSession();

  return (
    <header className="flex justify-between bg-slate-900 py-4 px-24">
      {session?.data ? (
        <Link
          href="/posts"
          className="text-white text-center items-center text-2xl mt-1 font-bold"
        >
          Todo App
        </Link>
      ) : (
        <Link
          href="/"
          className="text-white text-center items-center text-2xl mt-1 font-bold"
        >
          Todo App
        </Link>
      )}
      <div className="flex pt-[8px]">
        {session?.data ? (
          <div>
            <Link
              className="text-white text-1xl font-bold bg-emerald-700 p-1 rounded-md mr-5"
              href="/todos"
            >
              Todos
            </Link>
          </div>
        ) : undefined}

        {session?.data && (
          <Link className="text-white text-1xl font-bold mr-5" href="/profile">
            Profile
          </Link>
        )}

        {session?.data ? (
          <Link
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-white text-1xl font-bold mr-5"
            href="/"
          >
            Sign out
          </Link>
        ) : (
          <div className="flex">
            <div>
              <Link
                className="text-white text-1xl font-bold mr-5"
                href="/sign-in"
              >
                Sign in
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
