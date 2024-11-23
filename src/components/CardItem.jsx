import Button from "./Button";

function CardItem({ title, image, info }) {
  return (
    <div className=" z-40 shadow-[0px_0px_10px_5px_#d5d5d7] p-4 rounded-md flex gap-2 bg-[#f8fafc] text-white">
      <div className=" mx-[-4rem] hover:scale-110 duration-300 cursor-pointer w-full rounded-md overflow-hidden">
        <img className="w-[17.5rem] h-[15.5rem]" src={image} alt="" />
      </div>
      <div className="w-full flex flex-col justify-center text-black">
        <div className=" w-full mx-[2rem] flex flex-col gap-6 items-center justify-between">
          <h1 className=" uppercase font-bold border-b"> {title}</h1>
          <p className=" w-[80%] h-[4rem] italic font-semibold text-center p-2">
            {info}
          </p>

          <Button />
        </div>
      </div>
    </div>
  );
}

export default CardItem;
