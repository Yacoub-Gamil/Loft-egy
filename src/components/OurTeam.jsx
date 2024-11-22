function OurTeam() {
  return (
    <div className=" w-[90%] mx-auto">
      <h1 className=" uppercase text-[2rem] text-center font-serif font-semibold">
        Our Team
      </h1>
      <div className="grid grid-cols-5 gap-2 mb-[1rem] w-full">
        <img className=" h-[15rem] w-full " src="loft/hani.jpg" alt="" />
        <img className=" h-[15rem] w-full " src="loft/pierre.jpg" alt="" />
        <img className=" h-[15rem] w-full" src="loft/shnouda.jpg" alt="" />
        <img className=" h-[15rem] w-full " src="loft/yacoub.jpg" alt="" />
        <img className=" h-[15rem] w-full " src="loft/mina.jpg" alt="" />
      </div>
    </div>
  );
}

export default OurTeam;
