import { CiHeart } from "react-icons/ci";
import { IoInformation } from "react-icons/io5";
import { useContextAll } from "../context/contextAll";
import { NavLink } from "react-router-dom";

function ItemsCard({ id, name, price, image, description, quantity }) {
  const { dispatch } = useContextAll();
  return (
    <div className=" bg-white overflow-hidden shadow-[0px_0px_10px_0px_#718096] border rounded-md">
      <div className=" rounded-md flex flex-col items-center  p-4">
        <div className=" flex gap-2">
          <div className="flex-col  flex justify-center items-center mx-[1rem]">
            <img
              className=" rounded-md w-[14rem] h-[11rem] hover:scale-110 duration-300"
              src={image}
              alt=""
            />
            <div className=" flex  gap-4 mt-[1.4rem]">
              <CiHeart className=" border rounded-full text-[1.4rem] cursor-pointer hover:bg-black hover:text-white duration-300" />
              <NavLink to="/item-info">
                <IoInformation className=" border rounded-full text-[1.4rem] cursor-pointer hover:bg-black hover:text-white duration-300" />
              </NavLink>
            </div>
          </div>
          <div className=" w-[19rem] bg-white flex flex-col justify-between items-center p-2">
            <h1 className="  uppercase mb-[1rem] text-[0.8rem] border-b">
              {name}
            </h1>
            <h2 className=" italic font-semibold  ">( {price} EGP )</h2>
            <p className=" text-[.9rem] h-[4rem] mt-[.5rem] italic">
              {description?.slice(0, 40)}...
            </p>
            <div className=" bg-">
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
                className=" border px-[1rem] py-1 rounded-full font-semibold hover:bg-black duration-300 hover:text-white text-[.8rem]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsCard;
