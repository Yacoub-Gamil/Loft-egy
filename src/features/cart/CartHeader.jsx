import { useContextAll } from "../../context/contextAll";

function CartHeader() {
  const { items } = useContextAll();

  return (
    <div>
      <div className=" mb-[2rem] ">
        <h1 className=" font-bold text-[1.4rem]">Shopping Bag</h1>
        <h3 className=" text-[1rem] mx-[1rem]">
          <span className=" font-bold ">{items.length} Items</span> in your bag.
        </h3>
      </div>
      <div className="flex justify-end mb-[1rem]">
        <button className=" border px-1 py-1 rounded-full font-serif bg-white hover:bg-black hover:text-white duration-300">
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default CartHeader;
