import { NavLink } from "react-router-dom";
import DrobMenu from "./DrobMenu";
function NaviLink() {

  return (
    <div className=" mt-[1rem] uppercase font-bold flex text-[1rem] font-serif tracking-wide gap-[2rem]">
      <NavLink to="/home">Home</NavLink>
      <DrobMenu />
      <NavLink to="/spotlight">Spotlight</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default NaviLink;
