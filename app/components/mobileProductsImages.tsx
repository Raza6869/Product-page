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
    }
    if (mainImage === mainProduct4) {
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
    }
    if (mainImage === mainProduct4) {
      setMainImage(mainProduct1);
    }
  };
  return (
    <div>
      <div>
        <button onClick={previousImage} className="rounded-full bg-white">
          <Image src={previousIcon} alt="previous icon" />
        </button>
        <button onClick={nextImage} className="rounded-full bg-white">
          <Image src={nextIcon} alt="previous icon" />
        </button>
      </div>
      <Image src={mainImage} alt="product image" />
    </div>
  );
}
