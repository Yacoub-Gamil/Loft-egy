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
    </div>
  );
}

export default CartHeader;
