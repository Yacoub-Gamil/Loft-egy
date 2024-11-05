import { NavLink } from "react-router-dom";

function NaviLink() {
  return (
    <div className="  uppercase font-semibold flex text-[1rem] gap-6">
      <NavLink>Home</NavLink>
      <NavLink>Our Gallery</NavLink>
      <NavLink>Spotlight And more</NavLink>
      <NavLink>Services</NavLink>
    </div>
  );
}

export default NaviLink;
