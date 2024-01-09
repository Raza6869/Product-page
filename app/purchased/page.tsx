import Link from "next/link";
import Header from "../components/header";
import ProductProvider from "../context/productProvider";

export default function Purchased() {
  return (
    <ProductProvider>
      <main className="py-2 px-36">
        <Header />
        <div className="flex flex-col w-full justify-center items-center h-[75vh] ">
          <h1 className="text-5xl font-bold text-left text-Very-dark-blue">
            Product Purchased with sucess!
          </h1>
          <p className="text-xl text-Grayish-blue">
            Just stay for the order arrive.
          </p>
          <Link
            href={"/"}
            className="bg-Orange text-white font-bold px-12 py-4 rounded-lg mt-8 hover:bg-Orange/60 transition-all ease-in-out"
          >
            Keep shopping
          </Link>
        </div>
      </main>
    </ProductProvider>
  );
}
