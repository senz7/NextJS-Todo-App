"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { FC } from "react";

import { Button } from "../button";

type GoogleButtonProps = {
  className?: string | undefined;
};

export const GoogleButton: FC<GoogleButtonProps> = (props) => {
  const { className } = props;

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callback") || "/profile";

  return (
    <Button
      className={className}
      onClick={() => signIn("google", { callbackUrl })}
    >
      Sign in with Google
    </Button>
  );
};
