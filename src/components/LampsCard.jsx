import Button from "./Button";

const pipeLamps = [
  "lamps/pipe/pipe-1.png",
  "lamps/pipe/pipe-2.png",
  "lamps/pipe/pipe-3.png",
  "lamps/pipe/pipe-4.png",
  "lamps/pipe/pipe-5.png",
  "lamps/pipe/pipe-8.png",
  "lamps/pipe/pipe-7.png",
];

const egyptionLamps = [
  "lamps/egyption/01-.png",
  "lamps/egyption/02-.png",
  "lamps/egyption/03-.png",
  "lamps/egyption/04-.png",
  "lamps/egyption/05-.png",
  "lamps/egyption/06-.png",
];

function LampsCard() {
  return (
    <div className=" flex flex-col items-center mt-[6rem]">
      <h1 className=" mb-[2rem] font-sevillana tracking-wide text-[3rem] italic text-[#52525b] font-semibold border-b">
        Our production lamps
      </h1>
      {/* start */}
      <div className=" grid grid-cols-7 justify-center place-items-center mb-[5rem] ">
        {pipeLamps.map((img) => (
          <div key={img}>
            <img
              className=" cursor-pointer duration-300 hover:scale-110 w-full h-[13rem]"
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>

      {/* end */}

      {/* start */}
      <div className=" grid grid-cols-6 gap-6 p-8">
        {egyptionLamps.map((img) => (
          <div key={img}>
            <img
              className=" cursor-pointer duration-300 hover:scale-110 h-[15rem]"
              src={img}
              alt="lamp"
            />
          </div>
        ))}
      </div>
      <div className=" flex justify-center m-[3rem]">
        <Button to="/lamps">discover more</Button>
      </div>

      {/* end  */}
    </div>
  );
}

export default LampsCard;
