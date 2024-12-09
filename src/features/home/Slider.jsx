function Slider() {
  return (
    <div className=" flex justify-center  xs:w-full md:w-[80rem] bg-cover xs:h-[25rem] md:h-[32rem] shadow-[inset_0px_0px_10px_10px_#f7fafc] animate-[slider_30s_ease-in-out_infinite] mb-[8.2rem] mx-auto">
      <div
        id="logo"
        className=" md:w-[15rem] xs:w-[5rem] h-fit bg-slate-50 opacity-80 shadow-[0px_0px_20px_5px_#f1f5f9] "
      >
        <img
          className="md:h-[10rem] md:w-[15rem] z-45"
          src="loft/loft-logo.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Slider;
