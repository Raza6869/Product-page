//next imports
import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
//context
import ProductContext from "../context/productContext";
//media
import productImage from "@/images/image-product-1-thumbnail.jpg";
import deleteIcon from "@/images/icon-delete.svg";

export default function Product() {
  const { productAmount, setProductAmount, setHaveProduct } =
    useContext(ProductContext);
  const finalValue = productAmount * 125;

  const deleteProduct = () => {
    setProductAmount(0);
    setHaveProduct(false);
  };
  return (
    <div className="flex flex-col items-center sm:h-36 h-44 justify-center px-4">
      <div className="flex sm:justify-center justify-between w-full items-center gap-3 ">
        <Image
          src={productImage}
          alt="product image"
          className="sm:h-12 h-14 w-fit rounded-lg"
        />
        <div className="text-Grayish-blue sm:text-sm text-lg">
          <p>Fall Limited Edition Sneakers</p>
          <p className="mt-1">
            $125.00 x {productAmount}
            <span className="ml-2  font-bold text-Very-dark-blue">
              ${finalValue}.00
            </span>
          </p>
        </div>
        <Image
          src={deleteIcon}
          alt="delete button"
          onClick={deleteProduct}
          className="hover:cursor-pointer sm:h-auto h-5 w-fit sm:w-auto"
        />
      </div>
      <Link
        href="/purchased"
        className="w-full bg-Orange text-White sm:text-base text-lg sm:rounded-lg rounded-xl sm:py-3 py-5 font-bold sm:mt-4 mt-8 hover:bg-Orange/60  transition-all ease-in-out flex items-center justify-center"
      >
        Checkout
      </Link>
    </div>
  );
}
