import ItemsCardCart from "../components/ItemsCardCart";
import { useContextAll } from "../context/contextAll";

function CartPage() {
  const { items } = useContextAll();

  return (
    <div className=" w-full grid p-4 grid-cols-[1fr_auto]">
      <div className="p-4">
        <div className=" mb-[2rem] ">
          <h1 className=" font-bold text-[1.4rem]">Shopping Bag</h1>
          <h3 className=" text-[1rem] mx-[1rem]">
            <span className=" font-bold ">{items.length} Items</span> in your
            bag.
          </h3>
        </div>
        <div className=" bg-white p-8 rounded-2xl borde-b">
          <div className="flex justify-between font-bold">
            <div>
              <h1>Proudct</h1>
            </div>
            <div className=" flex w-[50%] justify-between ">
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Total Price</h1>
            </div>
          </div>

          {items.map((item) => (
            <ItemsCardCart
              key={item.name}
              name={item.name}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              descrption={item.descrption}
            />
          ))}
        </div>
      </div>
      <div className=" relative w-[21rem] h-[16rem]">
        <div className=" fixed bg-white mt-[8rem] p-2 rounded-2xl ">
          <div className="  bg-[#ffd28d] rounded-2xl  p-4 w-[20rem]">
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold  border-b">Cart Total</h1>
              <div className=" flex flex-col gap-3 ">
                <h2 className=" flex justify-between gap-8">
                  Cart Subtotal <span className=" font-semibold">EGP 5000</span>
                </h2>
                <h2 className=" flex justify-between gap-8">
                  Discount{" "}
                  <span className=" text-white font-semibold">-EGP 50</span>
                </h2>
                <h1 className=" flex justify-between gap-8">
                  Cart Total <span className=" font-bold">EGP 5000</span>
                </h1>
              </div>
              <button className=" hover:text-white hover:bg-black hover:scale-105 duration-300 mt-[1rem] py-2 w-full bg-white text-balck rounded-full">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
