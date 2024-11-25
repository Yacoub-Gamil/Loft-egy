import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroSlider from "../components/HeroSlider";
import CardItem from "../components/CardItem";
import ThonetCollection from "../components/ThonetCollection";
import LampsCard from "../components/LampsCard";

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
        duration: 1,
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

        <div id="slider">
          <HeroSlider />
        </div>
      </div>

      <div className=" w-full mx-auto gap-[4rem] grid grid-cols-3 mt-[-10rem]">
        <CardItem
          title="daybed"
          image="daybed.jpg"
          info="helods from the daybed in our gallery"
          price="52"
        />
        <CardItem
          title="bookshelf"
          image="bookshelf.jpg"
          info="helods from the daybed in our gallery "
          price="52"
        />
        <CardItem
          title="trays"
          image="trays/t-2.jpg"
          info="helods from the daybed in our gallery"
          price="52"
        />
      </div>

      <ThonetCollection />

      <div className="  gap-[6rem] w-[90rem] mx-auto grid grid-cols-2 mt-[-6rem]">
        <CardItem
          title="modern furniture"
          image="mirror.jpg"
          info="helods from the daybed in our gallery"
          price="52"
          to="/modern-furniture"
        />
        <CardItem
          title="chairs & more"
          image="chair.jpg"
          info="helods from the daybed in our gallery"
          price="52"
          to="/thonet-chairs"
        />
      </div>
      <LampsCard />
    </div>
  );
}

export default Home;
