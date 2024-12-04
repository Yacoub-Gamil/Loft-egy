import { IoIosClose } from "react-icons/io";
import { useContextAll } from "../../context/contextAll";

function CartHeader() {
  const { items, dispatch } = useContextAll();

  return (
    <div>
      <div className=" mb-[2rem] ">
        <h1 className=" font-bold text-[1.4rem]">Shopping Bag</h1>
        <h3 className=" text-[1rem] mx-[1rem]">
          <span className=" font-bold text-red-600">{items.length} Items</span>{" "}
          in your bag.
        </h3>
      </div>
      <div className=" flex justify-end m-[1rem]">
        <button
          onClick={() => dispatch({ type: "clearCart" })}
          className="flex items-center text-[.8rem] hover:border-b border-b duration-300 text-red-600 uppercase"
        >
          <IoIosClose className=" text-[1.3rem]" />
          <span>Clear cart</span>
        </button>
      </div>
    </div>
  );
}

export default CartHeader;
