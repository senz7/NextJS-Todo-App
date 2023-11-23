"use client";

import { FC, FormEventHandler, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { TextInput } from "../input";
import { Button } from "../button";
import { GoogleButton } from "../google-button";

export const SignInForm: FC = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event?.currentTarget);

    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    /* const registerUser = async (e: any) => {
      e.preventDefault();
      const responseData = await fetch("sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      const userInfo = await responseData.json();
      console.log(userInfo);
    }; */

    if (response && !response.error) {
      router.push("/profile");
      redirect("/todos");
    } else {
      console.log(response);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-52">
      <div className="flex flex-col items-center ">
        <h1 className="text-white font-bold text-4xl">Sign up!</h1>
        <div className="bg-slate-700 rounded-md px-10 py-10 mt-10">
          <div className="flex flex-col">
            <label className="mt-1 text-white text-1xl font-bold">Email</label>
            <TextInput
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              type="email"
              className="w-[300px] mt-3 outline-none border-slate-600 border-4 rounded-md text-white bg-slate-900"
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-5 text-white text-1xl font-bold">
              Password
            </label>
            <TextInput
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              type="password"
              className="w-[300px] mt-3 outline-none border-slate-600 border-4 rounded-md text-white bg-slate-900"
            />
          </div>

          <Button
            type="submit"
            className="w-[300px] mt-8 text-white text-1xl font-bold bg-emerald-700 p-1 rounded-md"
          >
            Submit!
          </Button>

          <p className="text-center pt-2 text-white text-1xl font-bold">or</p>

          <GoogleButton className="w-[300px] mt-2 text-white text-1xl font-bold bg-emerald-700 p-1 rounded-md" />
        </div>
      </div>
    </form>
  );
};
