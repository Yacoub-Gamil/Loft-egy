import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getItemById } from "../api/apiService";
import { PuffLoader } from "react-spinners";
import { useContextAll } from "../context/contextAll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ItemInfo() {
  const { dispatch } = useContextAll();
  const { itemId } = useParams();
  const navgate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["itemInfo"],
    queryFn: () => getItemById(itemId),
  });

  useGSAP(() => {
    gsap.fromTo("#itemInfo", { opacity: 0, x: -10 }, { opacity: 1, x: 0 });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className=" w-full h-[80vh] flex justify-center items-center">
          <PuffLoader color="#ff0000" size={150} />
        </div>
      ) : (
        <div
          id="itemInfo"
          className="container flex flex-col items-center justify-center p-4 h-[70vh] "
        >
          {data.map((item) => (
            <div
              key={item.id}
              className=" w-full rounded-sm p-4 border bg-white"
            >
              <div className=" grid grid-cols-2 ">
                <div className="">
                  {" "}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="  xl:h-[25rem]"
                  />
                </div>
                <div className=" flex flex-col xs:mx-1 justify-evenly">
                  <div className="">
                    <h1 className=" uppercase xl:text-[2.4rem] font-semibold underline mb-[1rem]">
                      {item.name}
                    </h1>
                    <h2 className=" xl:text-[2.2rem] ">EGP {item.price}</h2>
                  </div>
                  <p className=" text-[1.2rem] italic">{item.description}</p>
                  <div className="  flex gap-6 w-[20rem] mt-[4rem] xs:mx-[-5rem]">
                    <button
                      onClick={() => navgate(-1)}
                      className="uppercase text-[.8rem] text-red-600 border-b"
                    >
                      back Shopping
                    </button>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "addItemToCart",
                          payload: data[0],
                        })
                      }
                      className=" text-[.8rem] uppercase text-red-600 border-b"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ItemInfo;
