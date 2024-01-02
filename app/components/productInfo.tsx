//components
import AddProduct from "./addProduct";

export default function ProductInfo() {
  return (
    <section className="w-[400px]">
      <h2 className="uppercase text-sm mb-4 text-Orange font-bold tracking-wider">
        Sneaker Company
      </h2>
      <h1 className="font-bold text-4xl mb-8 text-Very-dark-blue">
        Fall Limited Edition Sneakers
      </h1>
      <p className="spacing-x-4 mb-4 text-Dark-grayish-blue text-[16px]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sale. They&apos;ll whithstand
        everything the wheater can offer.
      </p>
      <div className="mb-6">
        <div className="flex items-center gap-1">
          <p className="font-bold text-2xl text-Very-dark-blue">$125.00</p>
          <span className="font-bold text-Orange bg-Pale-orange text-sm p-1 rounded-md ml-2">
            50%
          </span>
        </div>
        <span className="text-Grayish-blue font-bold line-through">
          $250.00
        </span>
      </div>
      <AddProduct />
    </section>
  );
}
