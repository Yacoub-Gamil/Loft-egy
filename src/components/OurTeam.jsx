function OurTeam() {
  return (
    <div className=" w-[90%] mx-auto">
      <h1 className=" uppercase text-[3rem] italic font-sevillana text-[#52525b] mb-[1rem] text-center">
        Our Team
      </h1>
      <div className="grid grid-cols-5 gap-2 mb-[1rem] w-full">
        <img className=" rounded-md  h-[15rem] w-full" src="loft/shnouda.jpg" alt="" />
        <img className=" rounded-md  h-[15rem] w-full " src="loft/pierre.jpg" alt="" />
        <img className=" rounded-md  h-[15rem] w-full " src="loft/hani.jpg" alt="" />
        <img className=" rounded-md  h-[15rem] w-full " src="loft/yacoub.jpg" alt="" />
        <img className=" rounded-md  h-[15rem] w-full " src="loft/mina.jpg" alt="" />
      </div>
    </div>
  );
}

export default OurTeam;
