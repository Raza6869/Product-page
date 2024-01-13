"use client";
//next imports
import { useContext, useState } from "react";
import Image from "next/image";
//context
import ProductContext from "../context/productContext";
//media
import plus from "@/images/icon-plus.svg";
import less from "@/images/icon-minus.svg";
import whiteCart from "@/images/icon-cart-white.svg";

export default function AddProduct() {
  const { setHaveProduct, setProductAmount, productAmount } =
    useContext(ProductContext);
  const [amount, setAmount] = useState(0);

  const addProduct = () => {
    setHaveProduct(true);
    setProductAmount(productAmount + amount);
  };

  return (
    <div className="flex sm:flex-row flex-col justify-center items-center font-bold gap-4">
      <div className="flex bg-Light-grayish-blue p-2 sm:w-52 w-full justify-around items-center">
        <Image
          src={less}
          alt="minus icon"
          className="hover:cursor-pointer hover:scale-125 transition-all ease-in-out"
          onClick={() => {
            amount === 0 ? setAmount(0) : setAmount(amount - 1);
          }}
        />
        <p>{amount}</p>
        <Image
          src={plus}
          alt="plus icon"
          className="hover:cursor-pointer hover:scale-125 transition-all ease-in-out"
          onClick={() => {
            setAmount(amount + 1);
          }}
        />
      </div>
      <button
        onClick={addProduct}
        className="bg-Orange items-center text-White flex justify-center sm:mb-0 mb-14 h-14 w-full gap-3 rounded-2xl shadow-[0_35px_100px_-18px_rgba(255,124,25,0.6)] hover:bg-Orange/60  transition-all ease-in-out"
      >
        <Image src={whiteCart} alt="cart icon" />
        Add to cart
      </button>
    </div>
  );
}
