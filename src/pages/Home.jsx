import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import HeroSlider from "../components/HeroSlider";
import CardItem from "../components/CardItem";
import ThonetCollection from "../components/ThonetCollection";
function Home() {
  useGSAP(() => {
    gsap.fromTo(
      "logo",
      {
        opacity: 0,
      },
      {
        opacity: 1,

        delay: 2.5,
        duration: 2,
      }
    );
  }, []);
  return (
    <div className=" container">
      <div className="relative z-20">
        <div
          id="logo"
          className=" absolute z-40 left-[44%] top-[5%] mt-[-1.6rem] bg-slate-50 opacity-80 shadow-[0px_0px_20px_5px_#f1f5f9] "
        >
          <img
            className="h-[10rem] w-[15rem] z-45"
            src="loft/loft-logo.png"
            alt=""
          />
        </div>
        <div className=" bg-black"></div>
        <HeroSlider />
      </div>
      <div className=" w-full mx-[1rem] gap-[4rem] grid grid-cols-3 mt-[-10rem]">
        <CardItem
          title="daybed"
          image="daybed.jpg"
          info="helods from the daybed in our gallery"
          price="52"
        />
        <CardItem
          title="she"
          image="she.jpg"
          info="helods from the daybed in our gallery"
          price="52"
        />
        <CardItem
          title="daybed"
          image="paino.jpg"
          info="helods from the daybed in our gallery"
          price="52"
        />
      </div>
      <ThonetCollection />
      <div className=" mx-[1rem] gap-[4rem] grid grid-cols-3 mt-[-8rem]">
        <CardItem
          title="daybed"
          image="mirror.jpg"
          info="helods from the daybed in our gallery"
          price="52"
        />
        <CardItem
          title="daybed"
          image="chr.jpg"
          info="helods from the daybed in our gallery"
          price="52"
        />
        <CardItem
          title="daybed"
          image="trays/t-2.jpg"
          info="helods from the daybed in our gallery"
          price="52"
        />
      </div>
    </div>
  );
}

export default Home;
