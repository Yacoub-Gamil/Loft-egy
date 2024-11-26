import { useQuery } from "@tanstack/react-query";
import { getThonet } from "../api/apiService";
import ItemsCard from "../components/ItemsCard";

const ThonetChairs = () => {
  const { data } = useQuery({
    queryKey: ["thonet"],
    queryFn: getThonet,
  });

  return (
    <div className="">
      <div className=" w-full grid gap-6 grid-cols-5 mt-[4rem] mb-[2rem]">
        {data?.map((el) => (
          <ItemsCard
            key={el.name}
            name={el.name}
            image={el.image}
            price={el.price}
            descrption={el.descrption}
          />
        ))}
      </div>
    </div>
  );
};

export default ThonetChairs;
