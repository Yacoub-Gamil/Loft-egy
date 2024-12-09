import { IoIosClose } from "react-icons/io";
import { useContextAll } from "../../context/contextAll";

function CartItem({ id, name, image, price, description, quantity, htmlId }) {
  const { dispatch } = useContextAll();

  return (
    <div id={htmlId} className=" border rounded-sm mb-2 p-2">
      <div className=" flex justify-end ">
        <IoIosClose
          onClick={() => dispatch({ type: "removeFromCart", payload: id })}
          className=" cursor-pointer  xs:text-[.9rem] xl:text-[1.4rem] border rounded-full text-red-600"
        />
      </div>
      <div className="  flex justify-between items-center">
        <div className=" xl:flex gap-4">
          <div className=" hover:scale-110 duration-300">
            <img className=" object-contain h-[8rem]" src={image} alt="" />
          </div>
          <div className=" flex flex-col justify-center gap-4">
            <h1 className="font-serif">{name}</h1>
            <p className=" xl:w-[10rem] xs:text-[.8rem] xl:text-[1rem] italic opacity-50">
              {description}...
            </p>
          </div>
        </div>
        <div className=" flex xl:w-[55%] xs:w-[60%] xs:gap-4 font-semibold items-center justify-between ">
          <h1 className=" xl:text-[0.9rem] xs:text-[.6rem]">EGP {price}</h1>
          <div>
            <h1 className="text-center xl:text-[1rem] text-[.6rem]">
              {quantity}
            </h1>
          </div>
          <h1 className=" xl:text-[0.9rem] xs:text-[.6rem] font-semibold">
            {" "}
            EGP {price}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
