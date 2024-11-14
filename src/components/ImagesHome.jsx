import Button from "./Button";

function ImagesHome() {
  return (
    <div className="grid gap-[2px] grid-cols-4 place-content-stretch">
      <div className=" relative bg-black h-[35rem] row-start-1 row-end-3 rounded-sm overflow-hidden ">
        <img className=" w-full h-full" src="mirr.jpg" alt="" />
        <div className=" absolute bottom-4 left-[30%]">
          <Button>Discover more</Button>
        </div>
      </div>
      <div className=" relative row-start-2 rounded-sm overflow-hidden">
        <img className=" h-[15.8rem] w-full" src="chr.jpg" alt="" />
        <div className=" absolute bottom-4 left-[30%]">
          <Button>Discover more</Button>
        </div>
      </div>
      <div className=" relative h-[19rem] rounded-sm overflow-hidden">
        <img className="  w-full h-full" src="she.jpg" alt="" />
        <div className=" absolute bottom-4 left-[30%]">
          <Button>Discover more</Button>
        </div>
      </div>
      <div className=" relative w-full h-[35rem] col-span-2 row-span-2 rounded-sm overflow-hidden">
        <img className=" object-fill w-full h-full" src="daybed.jpg" alt="" />
        <div className=" absolute bottom-4 left-[40%]">
          <Button>Discover more</Button>
        </div>
      </div>
    </div>
  );
}

export default ImagesHome;
