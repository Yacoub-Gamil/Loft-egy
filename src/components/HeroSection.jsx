import { useState } from "react";
import ImageHeroSection from "./ImageHeroSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
  const [heroBg, setHeroBg] = useState(`bg-[url('loft/bg-2.jpg')]`);
  useGSAP(() => {
    gsap.fromTo(
      "#heroImage",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
      }
    );
  }, []);
  return (
    <>
      <div
        id="heroImage"
        className={` shadow-[0px_0px_10px_3px_#3b3d3f] w-full h-[65vh] overflow-hidden ${heroBg} flex justify-end bg-center bg-cover bg-no-repeat
      `}
      >
        <div id="main" className="w-[70%] flex justify-end items-end"></div>
      </div>
      <ImageHeroSection setHeroBg={setHeroBg} />
    </>
  );
}

export default HeroSection;
