import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "../../ui/Header";
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
      <Header />

      {items.length <= 0 ? (
        <EmptyCart />
      ) : (
        <div className=" w-[80rem] m-auto grid p-4 grid-cols-[1fr_auto]">
          <div className="p-9">
            <CartHeader />
            <div className=" bg-white p-4 rounded-2xl borde-b">
              {/* the header for the itmes  -Start here- */}
              <div className="flex justify-between font-bold">
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
                  key={item.name}
                  id={item.id}
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
