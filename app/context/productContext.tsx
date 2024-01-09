"use client";
//next imports
import { createContext, Dispatch, SetStateAction } from "react";

interface ProductContextTypes {
  haveProduct: boolean;
  setHaveProduct: Dispatch<SetStateAction<boolean>>;
  productAmount: number;
  setProductAmount: Dispatch<SetStateAction<number>>;
}

const ProductContext = createContext({} as ProductContextTypes);

export default ProductContext;
