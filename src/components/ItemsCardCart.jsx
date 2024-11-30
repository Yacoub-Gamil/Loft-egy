function ItemsCardCart({ name, image, price, descrption, quantity }) {
  return (
    <div className=" mt-[1.4rem] p-2 flex  justify-between items-center border-b ">
      <div className=" flex gap-4">
        <div className=" hover:scale-110 duration-300 w-[10rem]">
          <img src={image} alt="" />
        </div>
        <div className=" flex flex-col justify-center gap-4">
          <h1 className=" font-bold underline">{name}</h1>
          <p className=" w-[10rem]">{descrption.slice(0, 60)}...</p>
        </div>
      </div>
      <div className=" flex w-[50%] font-semibold justify-between ">
        <h1 className="">EGP {price}</h1>
        <h1 className="w-[10rem] text-center">{quantity}</h1>
        <h1 className=" text-[1.2rem] text-[#ffd30d]"> EGP {price}</h1>
      </div>
    </div>
  );
}

export default ItemsCardCart;
