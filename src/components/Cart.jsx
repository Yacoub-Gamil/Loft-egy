import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useContextAll } from "../context/contextAll";

function Cart() {
  const { items } = useContextAll();
  return (
    <div className=" mx-[2rem] flex justify-end ">
      <NavLink to="/cart" className="flex ">
        <FaCartShopping className=" text-[#52525b] text-[1.4rem]" />{" "}
        <span className="  rounded-full h-[1.6rem] flex justify-center items-center bg-[#52525b] text-white w-[1.6rem] mt-[-1rem]">
          {items.length}
        </span>
      </NavLink>
    </div>
  );
}

export default Cart;
