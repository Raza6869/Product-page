"use client";
//next imports
import Image from "next/image";

//media
import product1 from "@/images/image-product-1-thumbnail.jpg";
import product2 from "@/images/image-product-2-thumbnail.jpg";
import product3 from "@/images/image-product-3-thumbnail.jpg";
import product4 from "@/images/image-product-4-thumbnail.jpg";

import mainProduct1 from "@/images/image-product-1.jpg";
import mainProduct2 from "@/images/image-product-2.jpg";
import mainProduct3 from "@/images/image-product-3.jpg";
import mainProduct4 from "@/images/image-product-4.jpg";
import { useState } from "react";

export default function ProductImages() {
  const [mainImage, setMainImage] = useState(mainProduct1);
  return (
    <section className="w-1/3">
      <Image src={mainImage} alt="PrincipalImage" className="rounded-xl mb-6" />
      <fieldset className="thumb-images">
        <label onClick={() => setMainImage(mainProduct1)}>
          <input
            type="radio"
            name="image-list"
            id="image1"
            className="hidden peer"
            defaultChecked
          />
          <Image
            src={product1}
            alt="product thumbnail"
            className="rounded-xl"
          />
        </label>
        <label onClick={() => setMainImage(mainProduct2)}>
          <input
            type="radio"
            name="image-list"
            id="image2"
            className="hidden peer"
          />
          <Image
            src={product2}
            alt="product thumbnail"
            className="rounded-xl"
          />
        </label>
        <label onClick={() => setMainImage(mainProduct3)}>
          <input
            type="radio"
            name="image-list"
            id="image3"
            className="hidden peer"
          />
          <Image
            src={product3}
            alt="product thumbnail"
            className="rounded-xl"
          />
        </label>
        <label onClick={() => setMainImage(mainProduct4)}>
          <input
            type="radio"
            name="image-list"
            id="image4"
            className="hidden peer"
          />
          <Image
            src={product4}
            alt="product thumbnail"
            className="rounded-xl"
          />
        </label>
      </fieldset>
    </section>
  );
}
