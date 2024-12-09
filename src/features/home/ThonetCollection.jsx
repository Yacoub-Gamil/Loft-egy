import Button from "../../ui/Button";

function ThonetCollection() {
  return (
    <div className="xs:w-full mx-auto flex flex-col items-center xs:mt-[2rem] xl:mt-[4rem]">
      <h1 className=" xs:text-[1.4rem] xs:mb-[1rem] font-sevillana tracking-wide xl:text-[2.4rem] italic text-[#52525b] font-semibold ">
        Our hidden treasures of thonet !
      </h1>
      <div className="  xl:w-[70rem] xs:w-[18rem] sm:w-[22rem] xs:mb-[4rem] xl:mb-[9rem] xl:p-6 xl:mt-[1rem]">
        <div className=" grid xs:grid-cols-4 xl:grid-cols-8 md:grid-cols-8 justify-center place-items-center ">
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full xs:h-[5rem] xl:h-[13rem]"
            src="thonet/thonet-1.png"
            alt=""
          />
          <img
            className=" cursor-pointer  duration-300 hover:scale-110 w-full  xs:h-[5rem] xl:h-[10rem]"
            src="thonet/thonet-2.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full  xs:h-[5rem] xl:h-[10rem]"
            src="thonet/thonet-3.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full   xs:h-[5rem] xl:h-[10rem]"
            src="thonet/thonet-4.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full   xs:h-[5rem] xl:h-[10rem]"
            src="thonet/thonet-5.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110  w-full  xs:h-[5rem] xl:h-[10rem]"
            src="thonet/thonet-6.png"
            alt=""
          />
          <img
            className="  cursor-pointer duration-300 hover:scale-110 w-full  xs:h-[5rem] xl:h-[10rem]"
            src="thonet/thonet-8.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 xl:w-[5rem]   xs:h-[5rem] xl:h-[10rem]"
            src="thonet/thonet-7.png"
            alt=""
          />
        </div>
        <div className=" flex justify-center xs:mb-[3.6rem] xl:mb-0  xs:mt-[1rem]  xl:mt-[1rem]">
          <Button to="/thonet-chairs">discover more</Button>
        </div>
      </div>
    </div>
  );
}

export default ThonetCollection;
