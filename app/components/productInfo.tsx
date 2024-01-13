//components
import AddProduct from "./addProduct";

export default function ProductInfo() {
  return (
    <section className="sm:w-[400px] w-[350px]">
      <h2 className="uppercase text-[10px] sm:mb-4 mb-1 sm:mt-0 mt-4 text-Orange font-bold tracking-wider">
        Sneaker Company
      </h2>
      <h1 className="font-bold text-3xl sm:text-4xl sm:mb-8 mb-4 text-Very-dark-blue">
        Fall Limited Edition Sneakers
      </h1>
      <p className="spacing-x-4 mb-4 text-Dark-grayish-blue text-[16px]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sale. They&apos;ll whithstand
        everything the wheater can offer.
      </p>
      <div className="mb-6 flex sm:flex-col flex-row sm:justify-start sm:items-start justify-between items-center">
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
