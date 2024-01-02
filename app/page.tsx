//components
import Header from "./components/header";
import ProductImages from "./components/productImages";
import ProductInfo from "./components/productInfo";

export default function Home() {
  return (
    <main className="py-2 px-36">
      <Header />
      <div className="flex w-full justify-around items-center h-[75vh]">
        <ProductImages />
        <ProductInfo />
      </div>
    </main>
  );
}
