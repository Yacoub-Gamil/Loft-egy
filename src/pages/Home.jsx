import HeroSection from "../components/HeroSection";
import ImagesHome from "../components/ImagesHome";
import TitiCard from "../components/TitiCard";

function Home() {
  return (
    <div className=" container ">
      <HeroSection />

      <div className=" flex justify-center mb-[3rem] mt-[3rem] font-serif text-[1.8rem] font-bold">
        <h1 className=" text-[#292524] border-b uppercase">
          Our hidden old treasures !
        </h1>
      </div>
      <div className=" mb-[2rem]">
        <ImagesHome />
      </div>
      <TitiCard />
    </div>
  );
}

export default Home;
