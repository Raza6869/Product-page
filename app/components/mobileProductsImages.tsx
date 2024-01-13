"use client";
//next imports
import Image from "next/image";
import { useState } from "react";
//media
import mainProduct1 from "@/images/image-product-1.jpg";
import mainProduct2 from "@/images/image-product-2.jpg";
import mainProduct3 from "@/images/image-product-3.jpg";
import mainProduct4 from "@/images/image-product-4.jpg";

import nextIcon from "@/images/icon-next.svg";
import previousIcon from "@/images/icon-previous.svg";

export default function MobileProductImages() {
  const [mainImage, setMainImage] = useState(mainProduct1);

  const previousImage = () => {
    if (mainImage === mainProduct1) {
      setMainImage(mainProduct4);
    } else if (mainImage === mainProduct2) {
      setMainImage(mainProduct1);
    } else if (mainImage === mainProduct3) {
      setMainImage(mainProduct2);
    } else if (mainImage === mainProduct4) {
      setMainImage(mainProduct3);
    }
  };

  const nextImage = () => {
    if (mainImage === mainProduct1) {
      setMainImage(mainProduct2);
    } else if (mainImage === mainProduct2) {
      setMainImage(mainProduct3);
    } else if (mainImage === mainProduct3) {
      setMainImage(mainProduct4);
    } else if (mainImage === mainProduct4) {
      setMainImage(mainProduct1);
    }
  };

  return (
    <div className="mt-80">
      <div>
        <button
          onClick={previousImage}
          className="rounded-full hover:cursor-pointer bg-white absolute top-56 left-2"
        >
          <Image
            src={previousIcon}
            alt="previous icon"
            className="m-3 h-3 w-fit"
          />
        </button>
        <button
          onClick={nextImage}
          className="rounded-full hover:cursor-pointer bg-white absolute top-56 right-2"
        >
          <Image src={nextIcon} alt="previous icon" className="m-3 h-3 w-fit" />
        </button>
      </div>
      <Image src={mainImage} alt="product image" className="w-full" />
    </div>
  );
}
