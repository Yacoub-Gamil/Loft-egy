import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContextAll } from "../../context/contextAll";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import CartHeader from "./CartHeader";
import CartPayment from "./CartPayment";

function CartOverview() {
  const { items } = useContextAll();

  useGSAP(() => {
    gsap.fromTo(
      "#items",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.4 }
    );
    gsap.fromTo(
      "#item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4, delay: 0.6 }
    );
  }, []);

  return (
    <>
      {items.length <= 0 ? (
        <EmptyCart />
      ) : (
        <div
          id="items"
          className=" w-[80rem] m-auto grid p-4 grid-cols-[1fr_auto]"
        >
          <div className="p-9">
            <CartHeader />
            <div className=" bg-white p-4 rounded-sm  border-[2px]">
              {/* the header for the itmes  -Start here- */}
              <div className="flex justify-between p-4 mb-[1rem] font-bold">
                <div>
                  <h1>Product</h1>
                </div>
                <div className=" flex w-[50%] justify-between ">
                  <h1>Price</h1>
                  <h1>Quantity</h1>
                  <h1>Total Price</h1>
                </div>
              </div>
              {/* -End here- */}
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  htmlId="item"
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <CartPayment />
        </div>
      )}
    </>
  );
}

export default CartOverview;
