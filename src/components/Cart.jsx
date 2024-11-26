import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Cart() {
  return (
    <div className=" w-full border flex justify-end ">
      <NavLink to="/cart" className="mx-[20rem] mt-[-1.4rem] relative flex">
        <FaCartShopping className=" text-[#52525b] text-[1rem]" />{" "}
        <span className=" border rounded-full h-[1.2rem] flex justify-center items-center bg-[#52525b] text-white w-[1.2rem] mt-[-1rem]">
          0
        </span>
      </NavLink>
    </div>
  );
}

export default Cart;
