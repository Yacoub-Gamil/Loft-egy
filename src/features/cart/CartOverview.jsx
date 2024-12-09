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
          className=" xl:w-[80rem] xs:w-[22rem] sm:w-[28rem]  m-auto grid xl:p-4 xl:grid-cols-[1fr_auto]"
        >
          <div className="p-9">
            <CartHeader />
            <div className=" bg-white xl:p-4 rounded-sm xs:mx-[-1rem]  border-[2px]">
              {/* the header for the itmes  -Start here- */}
              <div className="flex justify-between p-4 mb-[1rem] font-bold">
                <div className="xl:text-[1rem] xs:text-[.8rem]">
                  <h1>Product</h1>
                </div>
                <div className=" flex xl:w-[50%] sm:gap-10 xl:text-[1rem] xs:gap-2 text-[.6rem] xl:justify-between ">
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
