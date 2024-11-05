import SmallHaderDetails from "./SmallHaderDetails";
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";

function SmallHeader() {
  return (
    <div className="px-[2rem] py-1 flex justify-between items-center text-[1rem] text-[#fafafa] bg-[#27272a]">
      <div className=" flex text-[1.4rem] items-center gap-4">
        <BiLogoFacebookSquare />
        <AiFillInstagram />
        <AiFillTikTok />
      </div>

      <div className="  flex gap-6  ">
        <SmallHaderDetails icon={<FaSquarePhone />}>
          ( +02 ) 1210955561
        </SmallHaderDetails>
        <SmallHaderDetails icon={<MdEmail />}>
          loftegy@hotmail.com
        </SmallHaderDetails>
        <SmallHaderDetails icon={<FaLocationDot />}>
          Our location
        </SmallHaderDetails>
      </div>
    </div>
  );
}

export default SmallHeader;
