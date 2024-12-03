import { useQuery } from "@tanstack/react-query";

import ItemsCard from "../components/ItemsCard";
import { PuffLoader } from "react-spinners";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getStore } from "../api/apiService";

const Thonet = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["thonet"],
    queryFn: getStore,
  });

  // to get just the thonet from the data base
  const thonet = data?.filter((tray) => tray.category === "thonet");

  useGSAP(() => {
    gsap.to("#itemCard", {
      ease: "power1.inOut",
      opacity: 1,
      duration: 0.2,
      stagger: {
        amount: 1,
        grid: [1, 1],
        from: "start",
        y: -8,
      },
    });
  }, [isLoading]);

  return isLoading ? (
    <div className=" w-full h-[80vh] flex justify-center items-center">
      <PuffLoader color="#ff0000" size={150} />
    </div>
  ) : (
    <div className="">
      <div className=" w-[80rem] grid gap-4 grid-cols-4 mt-[2rem] mx-auto mb-[2rem]">
        {thonet.map((item) => (
          <ItemsCard
            key={item.id}
            // htmlId="itemCard"
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Thonet;
