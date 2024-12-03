import { NavLink } from "react-router-dom";
import DropMenu from "./DropMenu";
import { useContextAll } from "../context/contextAll";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";

function NaviLink() {
  const { items } = useContextAll();

  return (
    <div className=" w-full  mt-[2rem]  uppercase flex  justify-center text-[1rem] font-serif  gap-[6rem]">
      <div className=" flex gap-[2rem]">
        <NavLink className=" hover:scale-105 duration-300" to="/home">
          Home
        </NavLink>

        <DropMenu />

        <NavLink className=" hover:scale-105 duration-300" to="/spotlight">
          Spotlight
        </NavLink>
        <NavLink className=" hover:scale-105 duration-300" to="/contact">
          Contact
        </NavLink>
        <NavLink to="/about" className="  hover:scale-105 duration-300">
          About us
        </NavLink>
      </div>

      <div className=" text-[1.2rem] mt-[-2rem] flex items-center gap-4 ">
        <NavLink to="/cart" className="flex items-center ">
          {items.length <= 0 ? (
            <span className="mt-[-1rem] w-[5px] rounded-full h-[5px] bg-[#52525b]"></span>
          ) : (
            <span className=" text-[1.1rem] mt-[-1.2rem]">
              {items.length}
            </span>
          )}
          <HiOutlineShoppingBag className="" />
        </NavLink>

        <NavLink to="/account" className="flex ">
          <IoPersonOutline />
        </NavLink>
      </div>
    </div>
  );
}

export default NaviLink;
