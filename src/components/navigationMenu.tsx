import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/SBlog-logo.png";
import Image from "next/image";

const NavigationMenu = () => {
  const [navigation, setNavigation] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavigation(true);
    } else {
      setNavigation(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed lg:left-1/2 lg:-translate-x-1/2 lg:top-10 ${
        navigation ? "bg-gray-50/70" : "bg-gray-50"
      } w-full lg:w-4/5 h-[6rem] lg:rounded-full flex justify-around md:justify-between items-center md:px-20 shadow-md z-10`}
    >
      <>
        <Link href="/">
          <Image src={Logo} width={100} height={100} alt="logo" />
        </Link>
        <div className="flex items-center">
          <h2 className="uppercase text-2xl font-extrabold tracking-wide">
            <span className="text-mainColor">Sport&apos;s</span> Blog
          </h2>
        </div>
      </>
    </nav>
  );
};

export default NavigationMenu;
