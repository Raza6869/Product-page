"use client";
//next imports
import { useContext } from "react";
//context
import ProductContext from "../context/productContext";
//components
import Product from "./product";

export default function Cart() {
  const { haveProduct } = useContext(ProductContext);
  return (
    <div className="flex flex-col shadow-2xl h-56 w-80 z-50 absolute top-20 right-20 rounded-xl bg-White">
      <h1 className="font-bold w-full border-b-2 border-Light-grayish-blue p-4">
        Cart
      </h1>
      {!haveProduct ? (
        <div className="flex h-36 justify-center items-center">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <Product />
      )}
    </div>
  );
}
