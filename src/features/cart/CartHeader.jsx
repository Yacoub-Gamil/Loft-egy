import { IoIosClose } from "react-icons/io";
import { useContextAll } from "../../context/contextAll";

function CartHeader() {
  const { items, dispatch } = useContextAll();

  return (
    <div>
      <div className=" mb-[2rem] ">
        <h1 className=" font-bold xs:text-[.8rem] xl:text-[1.4rem]">Shopping Bag</h1>
        <h3 className=" text-[1rem] mx-[1rem]">
          <span className=" font-bold xs:text-[.8rem] xl:text-[1rem] text-red-600">{items.length} Items</span>{" "}
          in your bag.
        </h3>
      </div>
      <div className=" flex xl:justify-end m-[1rem]">
        <button
          onClick={() => dispatch({ type: "clearCart" })}
          className="flex items-center xs:text-[.6rem] xl:text-[.8rem]  text-red-600 uppercase"
        >
          <IoIosClose className=" xl:text-[1.3rem]" />
          <span>Clear cart</span>
        </button>
      </div>
    </div>
  );
}

export default CartHeader;
