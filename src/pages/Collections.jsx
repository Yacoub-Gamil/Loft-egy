import { useQuery } from "@tanstack/react-query";
import { getStore } from "../api/apiService";
import { PuffLoader } from "react-spinners";
import ItemCard from "../components/ItemCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Collections = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allItems"],
    queryFn: getStore,
  });

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
    <div className=" xl:w-[80rem] w-[20rem] grid gap-4 xs:grid-cols-1 xl:grid-cols-4 mt-[2rem] mx-auto mb-[2rem]">
      {data?.map((item) => (
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

export default Collections;
