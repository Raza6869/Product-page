import Link from "next/link";
import Header from "../components/header";
import ProductProvider from "../context/productProvider";

export default function Purchased() {
  return (
    <ProductProvider>
      <main className="sm:py-2 sm:px-36 ">
        <Header />
        <div className="flex flex-col sm:px-o sm:py-0 px-16 w-full justify-center sm:items-center items-start h-[75vh] ">
          <h1 className="text-5xl font-bold text-left text-Very-dark-blue">
            Product Purchased with sucess!
          </h1>
          <p className="text-xl text-Grayish-blue sm:mt-0 mt-4">
            Just stay for the order arrive.
          </p>
          <Link
            href={"/"}
            className="bg-Orange text-white flex justify-center items-center sm:px-12 w-full sm:py-4 h-14 rounded-lg mt-8 hover:bg-Orange/60 transition-all ease-in-out"
          >
            Keep shopping
          </Link>
        </div>
      </main>
    </ProductProvider>
  );
}
