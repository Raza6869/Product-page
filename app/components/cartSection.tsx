"use client";
//next imports
import Image from "next/image";
//media
import cart from "@/images/icon-cart.svg";
import avatar from "@/images/image-avatar.png";
import { useState } from "react";
import Cart from "./cart";

export default function CartSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center gap-8">
      <Image
        src={cart}
        alt="cart logo"
        className="hover:cursor-pointer"
        onClick={() => {
          !isOpen ? setIsOpen(true) : setIsOpen(false);
        }}
      />
      <Image
        src={avatar}
        alt="avatar logo"
        className="h-10 w-fit hover:cursor-pointer hover:border-[1px] hover:border-Orange rounded-full"
      />
      {isOpen === true && <Cart />}
    </div>
  );
}
