import { NavLink } from "react-router-dom";

function NaviLink() {
  return (
    <div className=" mt-[1rem] uppercase font-bold flex text-[1rem] font-serif tracking-wide gap-6">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/spotlightAndMore">Spotlight & More</NavLink>
      <NavLink to="/spotlight">Spotlight</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default NaviLink;
