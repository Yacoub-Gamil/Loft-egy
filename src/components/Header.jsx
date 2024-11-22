import { NavLink } from "react-router-dom";
import NaviLink from "./NaviLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Header() {
  useGSAP(function () {
    gsap.fromTo(
      "#header",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, top: 0, left: 0 }
    );
  }, []);

  return (
    <div id="header" className=" sticky top-0 left-0 z-50 border-b">
      <div className=" bg-[#f1f5f9] w-full  flex justify-between items-center rounded-b-md text-[#52525b]">
        <div className="mx-[4rem] ">
          <img className="h-[5rem]" src="loft/loft-logo.png" alt="" />
        </div>

        <NaviLink />

        <div className=" mx-[4rem]">
          <NavLink
            to="/about"
            className=" font-serif tracking-wide duration-150 uppercase  hover:border-b border-[#dc2626] font-bold  p-2 rounded-md"
          >
            About us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
