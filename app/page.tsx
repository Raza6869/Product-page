"use client";
//next imports
import { useContext } from "react";
//context
import ZoomProvider from "./context/zoomProvider";
import ZoomContext from "./context/zoomContext";
//components
import Header from "./components/header";
import ProductInfo from "./components/productInfo";
import ProductImages from "./components/productImages";
import ImageZoom from "./components/imageZoom";

export default function Home() {
  const { isZoom } = useContext(ZoomContext);

  return (
    <ZoomProvider>
      <main className="py-2 px-36">
        <Header />
        <div className="flex w-full justify-around items-center h-[75vh] ">
          <ProductImages />
          <ProductInfo />
        </div>
      </main>
    </ZoomProvider>
  );
}
