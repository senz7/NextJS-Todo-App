import Link from "next/link";

import { Button } from "@/components/button";
import { FC } from "react";

export const MainHeader: FC = () => {
  return (
    <header className="flex justify-between bg-slate-900 py-4 px-24">
      <Link
        href="/"
        className="text-white text-center items-center text-2xl mt-1 font-bold"
      >
        Todo App
      </Link>
      <div>
        <Button className="text-white text-1xl font-bold bg-emerald-700 p-1 rounded-md mr-5">
          <Link href="/todos">Try it!</Link>
        </Button>
        <Button className="text-white text-1xl font-bold mr-5">
          <Link href="/sign-up">Sign up</Link>
        </Button>
        <Button className="text-white text-1xl font-bold">
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    </header>
  );
};
