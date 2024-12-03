import { useContextAll } from "../../context/contextAll";

function CartItem({ name, image, price, description, quantity, id }) {
  const { dispatch } = useContextAll();
  console.log(id);
  return (
    <div className="border-b">
      <div className="  mt-[1.4rem] p-2 flex justify-between items-center ">
        <div className=" flex gap-4">
          <div className=" hover:scale-110 duration-300 w-[10rem]">
            <img src={image} alt="" />
          </div>
          <div className=" flex flex-col justify-center gap-4">
            <h1 className=" font-bold underline">{name}</h1>
            <p className=" w-[10rem]">{description}...</p>
          </div>
        </div>
        <div className=" flex w-[50%] font-semibold justify-between">
          <h1 className="">EGP {price}</h1>
          <div>
            <h1 className="w-[10rem] text-center">{quantity}</h1>
          </div>
          <h1 className=" text-[1.2rem]"> EGP {price}</h1>
        </div>
      </div>
      <div className=" flex justify-end">
        <button
          onClick={() => dispatch({ type: "removeFromCart", payload: id })}
          className=" border rounded-full px-2 font-serif hover:bg-black hover:text-white duration-300 mb-1 "
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
