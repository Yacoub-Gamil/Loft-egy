import { NavLink } from "react-router-dom";
import NaviLink from "./NaviLink";

function Header() {
  return (
    <div className="z-50 bg-[#f1f5f9] sticky top-0 left-0 mb-[2rem] w-full shadow-[0px_0px_2px_0px_#2d3748] flex justify-between items-center rounded-b-md text-[#52525b]">
      <div className="mx-[4rem] ">
        <img className="w-[9rem]" src="loft/loft-logo.png" alt="" />
      </div>

      <NaviLink />

      <div className=" mx-[4rem]">
        <NavLink
          to="/about"
          className=" duration-150 uppercase  hover:border-b border-[#dc2626] font-bold  p-2 rounded-md"
        >
          About us
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
