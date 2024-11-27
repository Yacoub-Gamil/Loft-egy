import { NavLink } from "react-router-dom";
import DropMenu from "./DropMenu";

function NaviLink() {
  return (
    <div className=" mt-[2rem] uppercase  flex text-[1rem] font-serif tracking-wide gap-[2rem]">
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
    </div>
  );
}

export default NaviLink;
