import { NavLink } from "react-router-dom";
import NaviLink from "./NaviLink";

function Header() {
  return (
    <div className=" mb-[2rem] w-full border-b flex justify-between items-center rounded-b-md text-[#52525b]  mx-auto container">
      <div className=" ">
        <img className="w-[9rem]" src="loft/loft-logo.png" alt="" />
      </div>
      <NaviLink />
      <div className="">
        <NavLink
          to="/about"
          className=" duration-150 uppercase mx-3 hover:border-b border-[#dc2626] font-bold  p-2 rounded-md"
        >
          About us
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
