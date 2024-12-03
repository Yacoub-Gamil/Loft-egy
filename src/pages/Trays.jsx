import { useQuery } from "@tanstack/react-query";
import { getStore } from "../api/apiService";
import { PuffLoader } from "react-spinners";
import ItemsCard from "../components/ItemsCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Trays = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["trays"],
    queryFn: getStore,
  });

  // to get just the trays from the data base
  const trays = data?.filter((tray) => tray.category === "trays");

  // useGSAP(() => {
  //   gsap.to("#itemCard", {
  //     ease: "power1.inOut",
  //     opacity: 1,
  //     duration: 0.2,
  //     stagger: {
  //       amount: 1,
  //       grid: [1, 1],
  //       from: "start",
  //       y: -8,
  //     },
  //   });
  // }, [isLoading]);

  return isLoading ? (
    <div className=" w-full h-[80vh] flex justify-center items-center">
      <PuffLoader color="#ff0000" size={150} />
    </div>
  ) : (
    <div className="">
      <div className=" w-[80rem] mx-auto grid gap-4 grid-cols-4 mt-[2rem] mb-[2rem]">
        {trays.map((item) => (
          <ItemsCard
            key={item.id}
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

export default Trays;
