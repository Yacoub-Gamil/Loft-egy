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
      <div id="slider" className="">
        <Slider />
      </div>

      <div className="xl:w-[70rem] xs:w-[21rem] sm:w-[25rem] xs:gap-4 xl:gap-[6rem] mx-auto grid xl:grid-cols-3 xs:mt-[-18rem] xl:mt-[-10rem]">
        <CardItemHome
          title="daybed"
          image="daybed.jpg"
          info=" daybed in our gallery"
          price="52"
        />
        <CardItemHome
          title="bookshelf"
          image="bookshelf.jpg"
          info="bookshelf in our gallery "
          price="52"
        />
        <CardItemHome
          title="trays"
          image="trays/t-2.jpg"
          info="trays in our gallery"
          price="52"
          to="/trays"
        />
      </div>

      <ThonetCollection />

      <div className=" xl:w-[70rem] xs:w-[21rem] sm:w-[25rem] xs:gap-4 xl:gap-[6rem]  mx-auto grid xl:grid-cols-2 xs:mt-[-6rem]">
        <CardItemHome
          title="modern furniture"
          image="mirror.jpg"
          info="modern-furniture in our gallery"
          price="52"
          to="/modern-furniture"
        />
        <CardItemHome
          title="chairs & more"
          image="chair.jpg"
          info="thonet in our gallery"
          price="52"
          to="/thonet-chairs"
        />
      </div>

      <LampsCollection />
    </div>
  );
}

export default Home;
