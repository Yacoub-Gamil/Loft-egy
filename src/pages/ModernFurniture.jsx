import { useQuery } from "@tanstack/react-query";
import { getStore } from "../api/apiService";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PuffLoader } from "react-spinners";
import ItemCard from "../components/ItemCard";

const ModernFurniture = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["modren"],
    queryFn: getStore,
  });

  // to get just the modern furniture from the data base
  const modernFurniture = data?.filter(
    (modren) => modren.category === "modernFurniture"
  );

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
    <div className="">
      <div className=" xl:w-[80rem] xs:w-[20rem] xs:grid-cols-1 mx-auto grid gap-6 xl:grid-cols-4 mt-[2rem] mb-[2rem]">
        {modernFurniture.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            htmlId="itemCard"
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

export default ModernFurniture;
