"use client";
import { useState, useEffect } from "react";
import { signIn, getProviders } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
      console.log(res);
    })();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center px-4">
      <div>
        <h1 className="text-[1.5rem] md:text-[2rem] mb-8 text-center">
          Log in to Manage Your Portfolio
        </h1>
        {providers &&
          Object.values(providers).map((provider) => (
            <div
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className="p-2 md:p-3 border-2 border-secondaryColor flex gap-4 w-max mx-auto cursor-pointer"
            >
              <span className="text-[26px]">
                <FcGoogle />
              </span>{" "}
              <span>Continue with Google</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Signin;
