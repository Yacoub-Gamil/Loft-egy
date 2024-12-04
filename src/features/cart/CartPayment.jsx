import { useNavigate } from "react-router-dom";
import { useContextAll } from "../../context/contextAll";
import { IoArrowUndoSharp } from "react-icons/io5";

function CartPayment() {
  const { dispatch, totalPrice } = useContextAll();
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }
  return (
    <div className=" w-[20rem] h-[16rem]">
      <div className=" fixed border-[2px] bg-white mt-[7.8rem] ">
        <div className="w-[20rem]">
          <div className=" flex flex-col gap-4">
            <h1 className=" font-bold m-[1rem] border-b">Cart Total</h1>
            <div className=" p-4 flex font-semibold flex-col gap-3 ">
              <h2 className=" flex justify-between gap-8">
                Cart Subtotal{" "}
                <span className=" font-semibold">EGP {totalPrice}</span>
              </h2>
              <h2 className=" flex justify-between gap-8">
                Discount{" "}
                <span className=" opacity-60 font-semibold">-EGP 0</span>
              </h2>
              <h1 className=" flex justify-between gap-8 border-b">
                Cart Total <span className=" font-bold">EGP {totalPrice}</span>
              </h1>
            </div>
            <button className=" font-serif text-white mt-[1rem] bg-[#52525b] w-full py-2">
              Apply
            </button>
          </div>
        </div>
        <div className=" flex justify-center">
          <button
            onClick={handleGoBack}
            className=" absolute flex items-center gap-1 text-red-600  italic mt-[1rem]"
          >
            <IoArrowUndoSharp />
            <span>Back Shopping</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPayment;
