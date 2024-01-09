"use client";
//next imports
import Image from "next/image";
import { useState } from "react";
//media
import cart from "@/images/icon-cart.svg";
import cartblack from "@/images/icon-cart-black.svg";
import avatar from "@/images/image-avatar.png";
//components
import Cart from "./cart";

export default function CartSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIcon, setCartIcon] = useState(cart);
  return (
    <div className="flex items-center gap-8">
      <Image
        src={cartIcon}
        onMouseEnter={() =>
          !isOpen ? setCartIcon(cartblack) : setCartIcon(cartblack)
        }
        onMouseLeave={() =>
          !isOpen ? setCartIcon(cart) : setCartIcon(cartblack)
        }
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
