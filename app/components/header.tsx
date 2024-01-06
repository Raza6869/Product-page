//next imports
import Image from "next/image";
//media
import logo from "@/images/logo.svg";
import CartSection from "./cartSection";
import { useContext } from "react";
import ZoomContext from "../context/zoomContext";
import ImageZoom from "./imageZoom";

export default function Header() {
  const { isZoom } = useContext(ZoomContext);
  return (
    <header className="flex justify-between border-b-2 border-Light-grayish-blue">
      <div className="flex items-center gap-10">
        <Image src={logo} alt="sneakres logo" />
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
      {isZoom && <ImageZoom />}
      <CartSection />
    </header>
  );
}
