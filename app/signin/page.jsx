"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="h-screen flex justify-center items-center px-4">
      <div>
        <h1 className="text-[1.5rem] md:text-[2rem] mb-8 text-center">
          Log in to Manage Your Portfolio
        </h1>

        <div
          onClick={() => handleSignIn()}
          className="p-2 md:p-3 border-2 border-secondaryColor flex gap-4 w-max mx-auto cursor-pointer"
        >
          <span className="text-[26px]">
            <FcGoogle />
          </span>{" "}
          <span>Continue with Google</span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
