import { NavLink } from "react-router-dom";

function NaviLink() {
  return (
    <div className="  mt-[2.5rem] uppercase font-bold flex text-[1rem] gap-6">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/OurGallery">Our Gallery</NavLink>
      <NavLink to="/spotlightAndMore">Spotlight & More</NavLink>
      <NavLink to="/services">Services</NavLink>
    </div>
  );
}

export default NaviLink;
