import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoInformation } from "react-icons/io5";
import { useContextAll } from "../context/contextAll";

function ItemsCard({ id, name, price, image, descrption, quantity }) {
  const { dispatch } = useContextAll();

  return (
    <div
      id={id}
      className=" opacity-0 shadow-[0px_0px_20px_0px_#718096] border rounded-md"
    >
      <div className=" bg-white rounded-md flex flex-col items-center p-2">
        <div className=" relative flex">
          <div className="p-2 ">
            <img
              className=" w-[12rem]  h-[11rem] hover:scale-110 duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <h1 className=" uppercase border-b m-[.5rem]">{name}</h1>
        <div className="  text-center">
          <h2 className=" font-bold italic ">( {price} EGP )</h2>
          <p className=" m-4 text-[1rem] h-[4rem] italic">
            {descrption?.slice(0, 50)}...
          </p>
        </div>
        <div className="  flex gap-2 ">
          <div className=" hover:bg-black duration-300 cursor-pointer flex justify-center items-center text-[1.4rem] border rounded-full w-[2rem] h-[2rem]">
            <CiHeart className=" hover:text-white text-black" />
          </div>
          <div className="  hover:bg-black duration-300 cursor-pointer flex justify-center items-center text-[1.4rem] border rounded-full w-[2rem] h-[2rem]">
            <IoInformation className="hover:text-white text-black" />
          </div>
          <div className="  hover:bg-black duration-300 cursor-pointer flex justify-center items-center text-[1.4rem] border rounded-full w-[2rem] h-[2rem]">
            <CiShoppingCart
              onClick={() => {
                dispatch({
                  type: "addItemToCart",
                  payload: { id, name, price, image, descrption, quantity },
                });
              }}
              className="hover:text-white text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsCard;
