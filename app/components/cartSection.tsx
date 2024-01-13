"use client";
//next imports
import Image from "next/image";
import { useContext, useState } from "react";
//media
import cart from "@/images/icon-cart.svg";
import cartblack from "@/images/icon-cart-black.svg";
import avatar from "@/images/image-avatar.png";
//components
import Cart from "./cart";
import ProductContext from "../context/productContext";

export default function CartSection() {
  const { haveProduct, productAmount } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);
  const [cartIcon, setCartIcon] = useState(cart);
  return (
    <div className="flex items-center sm:gap-8 gap-4">
      {haveProduct && (
        <div className="text-[9px] rounded-md text-White bg-Orange px-2 absolute z-50 sm:top-9 sm:right-52 top-4 right-16">
          {productAmount}
        </div>
      )}
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
        className="sm:h-10 h-6 w-fit hover:cursor-pointer hover:border-[1px] hover:border-Orange rounded-full"
      />
      {isOpen === true && <Cart />}
    </div>
  );
}
