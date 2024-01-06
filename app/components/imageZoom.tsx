//next imports
import Image from "next/image";
import { useContext, useState } from "react";

//media
import product1 from "@/images/image-product-1-thumbnail.jpg";
import product2 from "@/images/image-product-2-thumbnail.jpg";
import product3 from "@/images/image-product-3-thumbnail.jpg";
import product4 from "@/images/image-product-4-thumbnail.jpg";

import mainProduct1 from "@/images/image-product-1.jpg";
import mainProduct2 from "@/images/image-product-2.jpg";
import mainProduct3 from "@/images/image-product-3.jpg";
import mainProduct4 from "@/images/image-product-4.jpg";

import closewhite from "@/images/icon-close-white.svg";
import closeorange from "@/images/icon-close-orange.svg";
import ZoomContext from "../context/zoomContext";

export default function ImageZoom() {
  const [mainImage, setMainImage] = useState(mainProduct1);
  const [closeIcon, setCloseIcon] = useState(closewhite);
  const { setIsZoom } = useContext(ZoomContext);

  return (
    <section className="absolute z-50 w-1/3 top-14 right-[520px] shadow-[0_35px_100px_808px_rgba(0,0,0,0.6)] rounded-xl bg-black/60">
      <Image
        src={closeIcon}
        onMouseEnter={() => setCloseIcon(closeorange)}
        onMouseLeave={() => setCloseIcon(closewhite)}
        onClick={() => setIsZoom(false)}
        alt="close icons"
        className="absolute -top-10 right-2 "
      />
      <Image src={mainImage} alt="PrincipalImage" className="rounded-xl mb-6" />
      <fieldset className="thumb-images">
        <label onClick={() => setMainImage(mainProduct1)}>
          <input
            title="image-list"
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
            title="image-list"
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
            title="image-list"
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
            title="image-list"
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
