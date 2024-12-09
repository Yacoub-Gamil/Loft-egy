import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="  border-t xl:mt-[4rem] xl:grid grid-cols-3 items-center text-[#52525b] bg-white">
      <div className=" flex justify-center">
        <img
          className="xs:w-[8rem] xl:w-[8rem]"
          src="loft/loft-logo.png"
          alt=""
        />
      </div>
      <div className="">
        <h1 className=" m-[1rem] font-semibold xs:text-[0.8rem] xl:text-[1rem] text-center tracking-widest uppercase">
          Connect With Us! We are on
        </h1>
        <div className=" flex xs:text-[.8rem] xs:gap-4 xl:gap-6 justify-center items-center xl:text-[1rem] ">
          <a
            target="blank"
            href="https://www.facebook.com/LoftGalleryEgypt/"
            className=" border border-[#52525b] rounded-full p-1 cursor-pointer hover:bg-white hover:text-black"
          >
            <FaFacebookF />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/loftgalleryegypt/"
            className=" border border-[#52525b] rounded-full p-1 cursor-pointer hover:bg-white hover:text-black"
          >
            <FaInstagram />
          </a>
          <a
            target="blank"
            href=""
            className=" border border-[#52525b] rounded-full p-1 cursor-pointer hover:bg-white hover:text-black"
          >
            <MdOutlineEmail />
          </a>
        </div>
        <div className=" sx:text-[.8rem] xl:text-[1rem] mb-[1rem] xs:gap-1 flex xl:gap-6 justify-center mt-[1rem]">
          <h1>(+02) 121 095 5561</h1>
          -<FaWhatsapp className=" text-[1.4rem]" />-<h1>(+02) 122 2276 680</h1>
        </div>
      </div>
      <div className=" flex justify-center  xs:mt-[1rem]">
        <iframe
          className=" rounded-sm"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7187.29000896313!2d31.220845528704807!3d30.058470104792274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f85b890619b%3A0x375e49f7f5e2be5e!2sThe%20Loft%20Gallery!5e0!3m2!1sid!2sid!4v1731687010250!5m2!1sid!2sid"
          width="350"
          height="100"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Footer;
