import Button from "./Button";

function Lamps() {
  return (
    <div className=" flex flex-col items-center mt-[4rem]">
      <h1 className=" font-sevillana tracking-wide text-[3rem] italic text-[#52525b] font-semibold border-b">
        Our production lamps
      </h1>
      <h1 className=" text-[2rem] font-bold font-serif italic text-[#52525b]">
        ( Pipe Lapms )
      </h1>
      <div className=" w-full mb-[9rem] p-6 mt-[1rem]">
        <div className=" grid grid-cols-8 justify-center place-items-center ">
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full h-[15rem]"
            src="lamps/pipe-1.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full h-[15rem]"
            src="lamps/pipe-2.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full h-[15rem]"
            src="lamps/pipe-3.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full  h-[15rem]"
            src="lamps/pipe-4.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full  h-[15rem]"
            src="lamps/pipe-5.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110  w-full h-[12rem]"
            src="lamps/pipe-6.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-full h-[15rem]"
            src="lamps/pipe-8.png"
            alt=""
          />
          <img
            className=" cursor-pointer duration-300 hover:scale-110 w-[20rem]  h-[20rem]"
            src="lamps/pipe-7.png"
            alt=""
          />
        </div>
        <div className=" flex justify-center mt-[1rem]">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Lamps;
