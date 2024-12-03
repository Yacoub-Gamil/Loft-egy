import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function DropMenu() {
  const [showMenu, setShowMenu] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      "#menu",
      { opacity: 0, y: -40 },
      { opacity: 1, duration: 0.5, y: 0 }
    );
  }, [showMenu]);

  document.body.addEventListener("click", (el) => {
    if (el.target.id !== "category") {
      setShowMenu(false);
    }
  });

  return (
    <div
      onClick={() => {
        setShowMenu((show) => !show);
      }}
      className="  relative  capitalize "
    >
      <div className=" flex items-center">
        <span
          id="category"
          className=" uppercase hover:scale-105 duration-300 cursor-pointer"
        >
          category
        </span>
        {!showMenu ? (
          <MdOutlineArrowDropDown className=" text-[1.5rem]" />
        ) : (
          <MdOutlineArrowDropUp className=" text-[1.5rem]" />
        )}
        {showMenu && (
          <div
            id="menu"
            className={`border rounded-md p-4 absolute top-10 bg-white`}
          >
            <ul className=" px-[1rem] w-[12rem] flex flex-col gap-[1rem]">
              <NavLink
                className=" hover:scale-110 duration-300 "
                to="/collections"
              >
                Collections
              </NavLink>
              <NavLink
                className=" hover:scale-110 duration-300 "
                to="/thonet-chairs"
              >
                thonet
              </NavLink>
              <NavLink
                className=" hover:scale-110 duration-300 "
                to="/modern-furniture"
              >
                modern-furniture
              </NavLink>
              <NavLink className=" hover:scale-110 duration-300 " to="/trays">
                trays
              </NavLink>

              <NavLink className=" hover:scale-110 duration-300 " to="/lamps">
                lamps
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropMenu;
