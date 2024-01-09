"use client";
import { useState } from "react";
//context
import ProductContext from "./productContext";

interface ProductProviderTypes {
  children: React.ReactNode;
}

export default function ProductProvider({ children }: ProductProviderTypes) {
  const [haveProduct, setHaveProduct] = useState(false);
  const [productAmount, setProductAmount] = useState(0);

  return (
    <ProductContext.Provider
      value={{ haveProduct, setHaveProduct, productAmount, setProductAmount }}
    >
      {children}
    </ProductContext.Provider>
  );
}
