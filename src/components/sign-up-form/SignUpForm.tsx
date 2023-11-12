import { FC } from "react";

import { TextInput } from "../input";
import { Button } from "../button";

export const SignUpForm: FC = () => {
  return (
    <form className="pt-52">
      <div className="flex flex-col items-center ">
        <h1 className="text-white font-bold text-4xl">Sign up!</h1>
        <div className="bg-slate-700 rounded-md px-10 py-10 mt-10">
          <div className="flex flex-col ">
            <label className="text-white text-1xl font-bold">User name</label>
            <TextInput className="w-[300px] mt-3 outline-none border-slate-600 border-4 rounded-md text-white bg-slate-900" />
          </div>
          <div className="flex flex-col">
            <label className="mt-5 text-white text-1xl font-bold">Email</label>
            <TextInput className="w-[300px] mt-3 outline-none border-slate-600 border-4 rounded-md text-white bg-slate-900" />
          </div>

          <Button className="w-[300px] mt-8 text-white text-1xl font-bold bg-emerald-700 p-1 rounded-md">
            Submit!
          </Button>
        </div>
      </div>
    </form>
  );
};
