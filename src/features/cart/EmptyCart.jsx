import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaTruckArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function EmptyCart() {
  useGSAP(() => {
    gsap.fromTo(
      "#car",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 2 }
    );
    gsap.fromTo(
      "#empty",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, delay: 1 }
    );
  }, []);

  return (
    <div className=" xl:w-full h-[80vh] flex justify-center items-center">
      <div
        id="empty"
        className=" bg-white xl:w-[50rem] sx:w-[20rem] sx:h-[10rem] xl:h-[15rem] flex justify-center border border-[#ffd28d] items-center rounded-2xl  p-4"
      >
        <div className=" ">
          <p className="xl:text-[1.8rem] xs:text-[1rem] font-serif">
            Your cart is empty 😊
          </p>
          <div className="flex justify-center">
            <NavLink
              to="/"
              className="bg-black italic text-[#ffd28d] hover:scale-105 duration-300 border px-4 py-1 rounded-md mt-[1rem] text-center sx:text-[.8rem] xl:text-[1.4rem] flex items-center gap-6"
            >
              <h1>Go fill it </h1>
              <FaTruckArrowRight id="car" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
