"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

import { Alert } from "../alert";
import { Button } from "../button";
import { GoogleButton } from "../google-button";
import { TextInput } from "../input";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        signIn();
      } else {
        setError((await response.json()).error);
      }
    } catch (error: any) {
      setError(error?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-52">
      <div className="flex flex-col items-center ">
        <h1 className="text-white font-bold text-4xl">Sign In!</h1>
        <div className="bg-slate-700 rounded-md px-10 py-10 mt-10">
          <div className="flex flex-col">
            <label className="mt-1 text-white text-1xl font-bold">Email</label>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-[300px] mt-3 outline-none border-slate-600 border-4 rounded-md text-white bg-slate-900"
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-5 text-white text-1xl font-bold">
              Password
            </label>
            <TextInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-[300px] mt-3 outline-none border-slate-600 border-4 rounded-md text-white bg-slate-900"
            />
          </div>

          {error && <Alert>{error}</Alert>}

          <Button className="w-[300px] mt-8 text-white text-1xl font-bold bg-emerald-700 p-1 rounded-md">
            Submit!
          </Button>
          <p className="text-center pt-2 text-white text-1xl font-bold">or</p>

          <GoogleButton className="w-[300px] mt-2 text-white text-1xl font-bold bg-emerald-700 p-1 rounded-md" />
        </div>
      </div>
    </form>
  );
};
