import { useQuery } from "@tanstack/react-query";
import { PuffLoader } from "react-spinners";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getStore } from "../api/apiService";
import ItemCard from "../components/ItemCard";

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
      duration: 0.3,
      stagger: {
        amount: 1,
        grid: [1, 1],
        from: "start",
        y: -8,
      },
    });
    // you have to put isLoading in gsap
  }, [isLoading]);

  return isLoading ? (
    <div className=" w-full h-[80vh] flex justify-center items-center">
      <PuffLoader color="#ff0000" size={150} />
    </div>
  ) : (
    <div className=" w-[80rem] grid gap-4 grid-cols-4 mt-[2rem] mx-auto mb-[2rem]">
      {thonet.map((item) => (
        <ItemCard
          key={item.id}
          htmlId="itemCard"
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          description={item.description}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default Thonet;
