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
    <div className="flex">
      <div className="flex items-center justify-center">
        <Image
          src={!isOpen ? menuopen : menuclose}
          alt="icon menu"
          className="absolute top-6 left-5 z-50 transition-all ease-in-out duration-300 "
          onClick={() => {
            !isOpen ? setIsOpen(true) : setIsOpen(false);
          }}
        />
        <Link href={"/"}>
          <Image
            src={logo}
            alt="sneakres logo"
            className="absolute left-12 top-5"
          />
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
