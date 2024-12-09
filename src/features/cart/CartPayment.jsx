import { Link } from "react-router-dom";
import { useContextAll } from "../../context/contextAll";
import { IoArrowUndoSharp } from "react-icons/io5";

function CartPayment() {
  const { totalPrice } = useContextAll();

  return (
    <div className=" sticky top-1 xl:w-[20rem] xs:h-[20rem] h-[16rem]">
      <div className=" border-[2px] top-1 bg-white xl:mt-[7.8rem] ">
        <div className=" xl:w-[20rem]">
          <div className=" flex flex-col gap-4">
            <h1 className=" font-bold xl:text-[1rem] xs:text-[.8rem] m-[1rem] border-b">
              Cart Total
            </h1>
            <div className=" p-4 flex font-semibold flex-col gap-3 ">
              <h2 className=" flex justify-between gap-8 xl:text-[1rem] xs:text-[.8rem]">
                Cart Subtotal{" "}
                <span className=" font-semibold">EGP {totalPrice}</span>
              </h2>
              <h2 className=" flex justify-between gap-8 xl:text-[1rem] xs:text-[.8rem]">
                Discount{" "}
                <span className=" opacity-60 font-semibold">-EGP 0</span>
              </h2>
              <h1 className=" flex justify-between gap-8 border-b xl:text-[1rem] xs:text-[.8rem]">
                Cart Total <span className=" font-bold">EGP {totalPrice}</span>
              </h1>
            </div>
            <button className=" font-serif text-white mt-[1rem] bg-[#52525b] w-full py-2">
              Apply
            </button>
          </div>
        </div>
        <div className=" flex justify-center">
          <Link
            to="/collections"
            className=" absolute flex items-center gap-1 text-red-600  italic mt-[1rem]"
          >
            <IoArrowUndoSharp />
            <span>Back Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPayment;
