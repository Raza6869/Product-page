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
    <div className="flex flex-col items-center h-36 justify-center px-4">
      <div className="flex justify-center items-center gap-3">
        <Image
          src={productImage}
          alt="product image"
          className="h-12 w-fit rounded-lg"
        />
        <div className="text-Grayish-blue text-sm">
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
          className="hover:cursor-pointer"
        />
      </div>
      <Link
        href="/purchased"
        className="w-full bg-Orange text-White rounded-lg py-3 font-bold mt-4 hover:bg-Orange/60  transition-all ease-in-out flex items-center justify-center"
      >
        Checkout
      </Link>
    </div>
  );
}
