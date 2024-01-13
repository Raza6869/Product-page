"use client";
//next imports
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

//media
import menuopen from "@/images/icon-menu.svg";
import menuclose from "@/images/icon-close.svg";
import logo from "@/images/logo.svg";
export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-White w-full">
      <div className="flex items-center justify-center">
        <Image
          src={!isOpen ? menuopen : menuclose}
          alt="icon menu"
          className="relative top-[1px] h-[14px] w-fit left-5 z-50 transition-all ease-in-out duration-300 "
          onClick={() => {
            !isOpen ? setIsOpen(true) : setIsOpen(false);
          }}
        />
        <Link href={"/"}>
          <Image src={logo} alt="sneakres logo" className="ml-8 h-4 w-fit" />
        </Link>
      </div>
      <nav>
        <ul className={!isOpen ? "closed" : "open"}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
