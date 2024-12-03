import { useNavigate } from "react-router-dom";
import { useContextAll } from "../../context/contextAll";

function CartPayment() {
  const { dispatch, totalPrice } = useContextAll();
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }
  return (
    <div className=" relative w-[21rem] h-[16rem] font-semibold">
      <div className=" fixed bg-white mt-[8rem] p-1 rounded-2xl ">
        <div className="  bg-[#ffd28d] rounded-2xl  p-4 w-[20rem]">
          <div className=" flex flex-col gap-4">
            <h1 className=" font-bold  border-b">Cart Total</h1>
            <div className=" flex flex-col gap-3 ">
              <h2 className=" flex justify-between gap-8">
                Cart Subtotal{" "}
                <span className=" font-semibold">EGP {totalPrice}</span>
              </h2>
              <h2 className=" flex justify-between gap-8">
                Discount{" "}
                <span className=" text-white font-semibold">-EGP 0</span>
              </h2>
              <h1 className=" flex justify-between gap-8">
                Cart Total <span className=" font-bold">EGP {totalPrice}</span>
              </h1>
            </div>
            <button className=" hover:text-white hover:bg-black font-semibold duration-300 mt-[1rem] py-2 w-full bg-white text-balck rounded-full">
              Apply
            </button>
          </div>
        </div>
        <div className=" mt-[1rem] flex justify-evenly ">
          <button
            onClick={() => {
              dispatch({ type: "clearCart" });
            }}
            className="px-6 py-1 rounded-full border border-[#ffd28d] bg-black text-white italic font-semibold"
          >
            Clear cart
          </button>
          <button
            onClick={handleGoBack}
            className="px-6 py-1 rounded-full border border-[#ffd28d]  bg-black text-white  italic font-semibold"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPayment;
