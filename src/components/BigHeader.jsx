import { NavLink } from "react-router-dom";
import NaviLink from "./NaviLink";

function BigHeader() {
  return (
    <div className=" w-full border-b flex justify-between items-center  rounded-b-md text-[#52525b]  mx-auto container shadow-[0px_0px_0px_0px_#52525b]">
      <div className=" ">
        <img className="w-[8rem]" src="Loft/loft-logo.png" alt="" />
      </div>
      <NaviLink />
      <div className="">
        <NavLink  className=" mx-3 border-b font-semibold  p-2 rounded-md">About us</NavLink>
      </div>
    </div>
  );
}

export default BigHeader;
