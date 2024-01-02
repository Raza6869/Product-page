export default function Cart() {
  return (
    <div className="flex flex-col shadow-2xl h-56 w-80 z-50 absolute top-24 right-20">
      <h1 className="font-bold w-full border-b-2 border-Light-grayish-blue p-4">
        Cart
      </h1>
      <div className="flex h-36 justify-center items-center">
        <p>Your cart is empty</p>
      </div>
    </div>
  );
}
