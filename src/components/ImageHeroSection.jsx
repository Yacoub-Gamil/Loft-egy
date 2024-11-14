import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ImageHeroSection({ setHeroBg }) {
  useGSAP(() => {
    gsap.fromTo(
      ".img",
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        duration: 0.4,
        delay: 1.5,
        y: 0,
        yoyo: true,
        stagger: {
          amount: 1,
          grid: [1, 1],
          from: "end",
        },
      }
    );
  }, []);

  return (
    <div
      id="grid"
      className=" w-full place-items-center p-4 gap-4 grid grid-cols-6"
    >
      <img
        onClick={() => setHeroBg(`bg-[url('loft/bg-1.jpg')]`)}
        className="img border border-[#a8a29e] cursor-pointer  hover:scale-105 duration-300 rounded-md w-[20rem] h-[8rem]"
        src="loft/bg-1.jpg"
        alt=""
      />
      <img
        onClick={() => setHeroBg(`bg-[url('loft/bg-2.jpg')]`)}
        className="img border border-[#a8a29e] cursor-pointer hover:scale-105 duration-300 rounded-md w-[20rem] h-[8rem]"
        src="loft/bg-2.jpg"
        alt=""
      />
      <img
        onClick={() => setHeroBg(`bg-[url('loft/bg-3.jpg')]`)}
        className="img border border-[#a8a29e]  cursor-pointer hover:scale-105 duration-300 rounded-md w-[20rem] h-[8rem]"
        src="loft/bg-3.jpg"
        alt=""
      />
      <img
        onClick={() => setHeroBg(`bg-[url('loft/bg-4.jpg')]`)}
        className=" img border border-[#a8a29e] cursor-pointer hover:scale-105 duration-300 rounded-md w-[20rem] h-[8rem]"
        src="loft/bg-4.jpg"
        alt=""
      />
      <img
        onClick={() => setHeroBg(`bg-[url('loft/bg-5.jpg')]`)}
        className=" img border border-[#a8a29e] cursor-pointer hover:scale-105 duration-300 rounded-md w-[20rem] h-[8rem]"
        src="loft/bg-5.jpg"
        alt=""
      />
      <img
        onClick={() => setHeroBg(`bg-[url('loft/bg-6.jpg')]`)}
        className="img border border-[#a8a29e] cursor-pointer hover:scale-105 duration-300 rounded-md w-[20rem] h-[8rem]"
        src="loft/bg-6.jpg"
        alt=""
      />
    </div>
  );
}

export default ImageHeroSection;
