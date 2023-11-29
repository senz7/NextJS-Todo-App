import Link from "next/link";

import { Button } from "@/components/button";

export const MainPageContent = () => {
  return (
    <div className="pt-40 text-center items-center text-white font-extrabold text-4xl">
      <h1 className="mt-2">Let's work together!</h1>
      <h2 className="mt-2">write your todos now!</h2>
      <Button className=" bg-emerald-700 p-2 mt-2 rounded-md hover:bg-emerald-600">
        <Link href="/sign-in">Try it!</Link>
      </Button>
    </div>
  );
};
