import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CardItemHome from "../features/home/CardItemHome";
import ThonetCollection from "../features/home/ThonetCollection";
import Slider from "../features/home/Slider";
import LampsCollection from "../features/home/LampsCollection";

function Home() {
  useGSAP(() => {
    gsap.fromTo(
      "#logo",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.4,
        duration: 0.4,
      }
    );
    gsap.fromTo(
      "#slider",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="container">
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

        <div id="slider" className="">
          <Slider />
        </div>
      </div>

      <div className=" w-[80rem] mx-auto gap-[5rem] grid grid-cols-3 mt-[-10rem]">
        <CardItemHome
          title="daybed"
          image="daybed.jpg"
          info="helods from the daybed in our gallery"
          price="52"
        />
        <CardItemHome
          title="bookshelf"
          image="bookshelf.jpg"
          info="helods from the daybed in our gallery "
          price="52"
        />
        <CardItemHome
          title="trays"
          image="trays/t-2.jpg"
          info="helods from the daybed in our gallery"
          price="52"
          to="/trays"
        />
      </div>

      <ThonetCollection />

      <div className=" w-[80rem] gap-[6rem]  mx-auto grid grid-cols-2 mt-[-6rem]">
        <CardItemHome
          title="modern furniture"
          image="mirror.jpg"
          info="helods from the daybed in our gallery"
          price="52"
          to="/modern-furniture"
        />
        <CardItemHome
          title="chairs & more"
          image="chair.jpg"
          info="helods from the daybed in our gallery"
          price="52"
          to="/thonet-chairs"
        />
      </div>

      <LampsCollection />
    </div>
  );
}

export default Home;
