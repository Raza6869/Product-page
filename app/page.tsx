"use client";
//context
import ZoomProvider from "./context/zoomProvider";
import ProductProvider from "./context/productProvider";
//components
import Header from "./components/header";
import ProductInfo from "./components/productInfo";
import ProductImages from "./components/productImages";

export default function Home() {
  return (
    <ProductProvider>
      <ZoomProvider>
        <main className="py-2 px-36">
          <Header />
          <div className="flex w-full justify-around items-center h-[75vh] ">
            <ProductImages />
            <ProductInfo />
          </div>
        </main>
      </ZoomProvider>
    </ProductProvider>
  );
}
