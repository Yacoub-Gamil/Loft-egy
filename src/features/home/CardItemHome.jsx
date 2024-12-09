import { useGSAP } from "@gsap/react";
import Button from "../../ui/Button";
import gsap from "gsap";

function CardItemHome({ title, image, info, to }) {
  // useGSAP(() => {
  //   gsap.fromTo(
  //     "#card",
  //     { opacity: 0, y: -80 },
  //     { opacity: 1, delay: 2, duration: 1, y: 0 }
  //   );
  // }, []);
  return (
    <div
      id="card"
      className=" z-40 shadow-[0px_0px_10px_5px_#d5d5d7] xl:p-4 xs:p-1 rounded-md flex xs:gap-5 xl:gap-2 bg-[#f8fafc] text-white"
    >
      <div className=" xl:mx-[-4rem] xs:mx-[-1rem] xl:hover:scale-110 duration-300 xs:h-[10rem] xs:mt-[.rem] cursor-pointer xl:h-full w-full rounded-md overflow-hidden">
        <img
          className=" xl:w-[15rem] xs:w-full xs:h-[11rem] xl:h-[15rem]"
          src={image}
          alt=""
        />
      </div>
      <div className=" w-full flex flex-col justify-center text-black">
        <div className=" w-full xl:mx-[2rem] flex flex-col gap-6 items-center justify-between">
          <h1 className=" xs:mt-[1rem] xs:text-[.7rem] md:text-[1rem] uppercase font-bold border-b">
            {title}
          </h1>
          <p className=" text-[#52525b] w-[80%] xl:h-[8rem] xs:text-[.6rem] md:text-[.8rem] italic font-semibold text-center xl:p-2">
            {info}
          </p>
          <Button to={to}>find more</Button>
        </div>
      </div>
    </div>
  );
}

export default CardItemHome;
