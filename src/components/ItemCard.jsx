import { IoInformation } from "react-icons/io5";
import { useContextAll } from "../context/contextAll";
import { Link } from "react-router-dom";

function ItemCard({ id, name, price, image, description, quantity, htmlId }) {
  const { dispatch } = useContextAll();

  return (
    <div
      id={htmlId}
      className=" opacity-0 flex flex-col items-center shadow-[0px_0px_10px_0px_#00000024] bg-white justify-center border rounded-sm"
    >
      <Link
        to={`/item-info/${id}`}
        className="w-full mt-[1rem] relative cursor-pointer "
      >
        <IoInformation className=" text-[1.5rem] rounded-full absolute  right-6 border-b  border-b-[#52525b]  justify-end" />
      </Link>
      <div className=" w-full flex justify-center ">
        <img
          className=" hover:scale-105 duration-300 h-[12rem]"
          src={image}
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center p-1 mt-[1rem] gap-4">
        <h1 className=" uppercase font-serif">{name}</h1>
        <p className=" italic text-[0.9rem] text-[#52525b] h-[2rem]">
          {description.slice(0, 45)}...
        </p>
        <h2 className=" italic font-serif text-[1.2rem] border-b border-black ">
          {price} EGP
        </h2>
      </div>
      <button
        onClick={() => {
          dispatch({
            type: "addItemToCart",
            payload: {
              name,
              price,
              image,
              description,
              quantity,
              id,
            },
          });
        }}
        className=" font-serif text-slate-50 mt-[1rem] bg-[#52525b] w-full py-2 "
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ItemCard;
