"use client";
//context
import ZoomProvider from "./context/zoomProvider";
import ProductProvider from "./context/productProvider";
//utils
import { DeviceSize } from "./utils/deviceResize";
//components
import Header from "./components/header";
import ProductInfo from "./components/productInfo";
import ProductImages from "./components/productImages";
import MobileProductImages from "./components/mobileProductsImages";

export default function Home() {
  return (
    <ProductProvider>
      <ZoomProvider>
        <main className="sm:py-2 sm:px-36 ">
          <Header />
          <div className="flex flex-col sm:flex-row w-full justify-around items-center h-[75vh] ">
            {DeviceSize() < 628 ? <MobileProductImages /> : <ProductImages />}
            <ProductInfo />
          </div>
        </main>
      </ZoomProvider>
    </ProductProvider>
  );
}
