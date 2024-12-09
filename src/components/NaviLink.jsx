import { NavLink } from "react-router-dom";
import DropMenu from "./DropMenu";
import { useContextAll } from "../context/contextAll";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";

function NaviLink() {
  const { items } = useContextAll();

  return (
    <div className=" xl:w-full sm:w-[30rem] xs:mt-[1rem] uppercase flex xs:justify-evenly sm:justify-center xl:mx-[-2rem] xs:text-[.6rem] xl:text-[1rem] font-serif xs:gap-3 xl:gap-6 ">
      <div className=" flex xl:gap-[2rem] xs:gap-[.6rem]">
        <NavLink className=" hover:scale-105 duration-300" to="/home">
          Home
        </NavLink>

        <DropMenu />

        <NavLink className=" hover:scale-105 duration-300" to="/contact">
          Contact
        </NavLink>
        <NavLink to="/about" className=" hover:scale-105 duration-300">
          About us
        </NavLink>
      </div>

      <div className=" xs:mt-[-1rem] mt-[-2rem] flex items-center xs:gap-2 xl:gap-4 sm:gap-2">
        <NavLink to="/cart" className="flex items-center ">
          {items.length <= 0 ? (
            <span className="mt-[-1rem] w-[5px] rounded-full h-[5px] bg-[#52525b]"></span>
          ) : (
            <span className=" xs:text-[.6rem]  md:mt-[-1.4rem] xs:mt-[-.8rem] xl:text-[1.1rem] xl:mt-[-1.2rem]">
              {items.length}
            </span>
          )}
          <HiOutlineShoppingBag className=" xl:text-[1.2rem] xs:text-[.8rem]" />
        </NavLink>

        <NavLink to="/account" className=" xl:text-[1.2rem] xs:text-[.8rem]">
          <IoPersonOutline />
        </NavLink>
      </div>
    </div>
  );
}

export default NaviLink;
