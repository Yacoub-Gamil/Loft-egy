import Button from "../../ui/Button";

function ThonetCollection() {
  return (
    <div className=" flex flex-col items-center mt-[4rem]">
      <h1 className=" font-sevillana tracking-wide text-[2.4rem] italic text-[#52525b] font-semibold ">
        Our hidden treasures of thonet !
      </h1>
      <div className=" w-[70rem] mb-[9rem] p-6 mt-[1rem]">
        <div className=" grid grid-cols-8 justify-center place-items-center ">
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full h-[13rem]"
            src="thonet/thonet-1.png"
            alt=""
          />
          <img
            className=" cursor-pointer  duration-300 hover:scale-110 w-full h-[10rem]"
            src="thonet/thonet-2.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full h-[10rem]"
            src="thonet/thonet-3.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full  h-[10rem]"
            src="thonet/thonet-4.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full  h-[10rem]"
            src="thonet/thonet-5.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110  w-full h-[10rem]"
            src="thonet/thonet-6.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full h-[10rem]"
            src="thonet/thonet-8.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-[5rem]  h-[10rem]"
            src="thonet/thonet-7.png"
            alt=""
          />
        </div>
        <div className=" flex justify-center mt-[1rem]">
          <Button to="/thonet-chairs">discover more</Button>
        </div>
      </div>
    </div>
  );
}

export default ThonetCollection;
