import { useQuery } from "@tanstack/react-query";
import { getThonet } from "../api/apiService";
import ItemsCard from "../components/ItemsCard";
import { PuffLoader } from "react-spinners";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ThonetChairs = () => {
  const { data: item, isLoading } = useQuery({
    queryKey: ["thonet"],
    queryFn: getThonet,
  });

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
      <div className=" w-full grid gap-6 grid-cols-5 mt-[2rem] mb-[2rem]">
        {item?.map((el) => (
          <ItemsCard
            id="itemCard"
            itemId={el.id}
            key={el.name}
            name={el.name}
            image={el.image}
            price={el.price}
            quantity={el.quantity}
            descrption={el.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ThonetChairs;
