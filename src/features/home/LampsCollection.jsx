import Button from "../../ui/Button";

const pipeLamps = [
  "lamps/pipe/pipe-1.png",
  "lamps/pipe/pipe-2.png",
  "lamps/pipe/pipe-3.png",
  "lamps/pipe/pipe-4.png",
  "lamps/pipe/pipe-5.png",
  "lamps/pipe/pipe-8.png",
  "lamps/pipe/pipe-9.png",
];

const egyptionLamps = [
  "lamps/egyption/01-.jpg",
  "lamps/egyption/02-.jpg",
  "lamps/egyption/03-.jpg",
  "lamps/egyption/04-.jpg",
  "lamps/egyption/05-.jpg",
  "lamps/egyption/06-.jpg",
  "lamps/egyption/07-.jpg",
  "lamps/egyption/08-.jpg",
  "lamps/egyption/09-.jpg",
  "lamps/egyption/10-.jpg",
];

function LampsCollection() {
  return (
    <div className=" xs:w-full mx-auto flex flex-col items-center  xs:mt-[2rem] xl:mt-[6rem]">
      <h1 className=" xs:text-[1.4rem]  xs:mb-[1rem] xl:mb-[2rem] font-sevillana tracking-wide md:mx-[5rem] md:text-[2.4rem] italic text-[#52525b] font-semibold ">
        Our production lamps
      </h1>

      {/* start */}
      <div className=" grid grid-cols-7 xs:mb-[1.4rem] justify-center place-items-center xl:mb-[5rem] ">
        {pipeLamps.map((img) => (
          <div key={img}>
            <img
              className=" cursor-pointer duration-300 hover:scale-110  xs:h-[4rem] md:h-[8rem]"
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>
      {/* end */}

      {/* start */}
      <div className="  md:w-[70rem] grid  grid-cols-5 xs:gap-[1px] xl:gap-2">
        {egyptionLamps.map((img) => (
          <div key={img}>
            <img
              className="rounded-sm cursor-pointer duration-300 hover:scale-105 w-full xs:h-[4rem] md:h-[12rem]"
              src={img}
              alt="lamp"
            />
          </div>
        ))}
      </div>
      <div className=" flex justify-center xs:m-[1rem] xl:m-[3rem]">
        <Button to="/lamps">discover more</Button>
      </div>
      {/* end  */}
    </div>
  );
}

export default LampsCollection;
