"use client";

import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { images } from "@constants";
import "./Navbar.scss";

const Navbar = () => {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const [userToggle, setUserToggle] = useState(false);

  const handleSignOut = async () => {
    setUserToggle(false);

    await signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link href="/" as="/">
          <Image src={images.logo} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "brands", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
              {/* <div /> */}
            </li>
          )
        )}
      </ul>

      <div className="relative hidden 900px:block">
        {!session && (
          <Link href={"/signin"} className="font-bold text-secondaryColor">
            Log in
          </Link>
        )}
        {session && (
          <>
            <Image
              src={session.user.image}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full cursor-pointer"
              onClick={() => setUserToggle((prev) => setUserToggle(!prev))}
            />
            {userToggle && (
              <div className="absolute top-[50px] right-[30px] bg-white text-blackColor py-6 px-6 shadow-md">
                <div
                  onClick={() => setUserToggle(false)}
                  className="mb-2 hover:text-secondaryColor"
                >
                  <Link href={"/dashboard"}>Dashboard</Link>
                </div>
                <div
                  onClick={handleSignOut}
                  className="cursor-pointer hover:text-secondaryColor"
                >
                  Log out
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="app__navbar-menu-container"
          >
            <div className="app__navbar-menu-container-1">
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "work", "skills", "brands", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  )
                )}
                {!session ? (
                  <li onClick={() => setToggle(false)}>
                    <Link
                      href={"/signin"}
                      className="font-bold text-secondaryColor"
                    >
                      Log in
                    </Link>
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      setToggle(false);
                      handleSignOut();
                    }}
                    className="cursor-pointer hover:text-secondaryColor"
                  >
                    Log out
                  </li>
                )}
              </ul>
            </div>

            <div className="flex w-full justify-center mt-[3rem] bg-grayColor shadow-md rounded-md py-4">
              {session && (
                <Link
                  href={"/dashboard"}
                  as={"/dashboard"}
                  onClick={() => setToggle(false)}
                >
                  <Image
                    src={session.user.image}
                    alt="profile"
                    width={55}
                    height={55}
                    className="rounded-full cursor-pointer border-4 border-white"
                  />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
