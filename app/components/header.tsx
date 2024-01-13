"use client";
//next imports
import Image from "next/image";
//utils
import { DeviceSize } from "../utils/deviceResize";
//media
import logo from "@/images/logo.svg";
import CartSection from "./cartSection";
import Link from "next/link";
import MobileHeader from "./mobileHeader";

export default function Header() {
  return (
    <header className="flex justify-between border-b-2 border-Light-grayish-blue sm:h-auto h-16 sm:w-auto bg-white z-50 sm:static fixed w-full">
      {DeviceSize() < 648 ? (
        <MobileHeader />
      ) : (
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <Image src={logo} alt="sneakres logo" />
          </Link>
          <nav>
            <ul className="flex gap-6">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      )}
      <CartSection />
    </header>
  );
}
