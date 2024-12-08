import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  useGSAP(() => {
    gsap.fromTo(
      "#contact",
      { opacity: 0, y: -5 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);
  return (
    <div
      id="contact"
      className=" xl:w-[80rem] xs:w-[21rem] sm:w-[30rem] mx-auto flex items-center flex-col"
    >
      <div>
        <img
          className=" xl:w-[18rem] xs:w-[12rem]"
          src="loft/loft-logo.png"
          alt=""
        />
      </div>

      <div className="w-full bg-cover  xl:h-[35rem] xs:h-[20rem] bg-[url('loft/bg-4.jpg')] bg-no-repeat flex flex-col justify-center items-center">
        <div className=" xl:w-[50%] xs:w-[80%] xs:p-2 xl:p-4 bg-opacity-70 bg-slate-50 flex  flex-col xs:gap-2 xl:gap-8 items-center">
          <h1 className=" xl:text-[2rem] xs:text-[1rem] font-semibold italic">
            Still better, visit us in person!
          </h1>
          <p className=" xl:text-[1.4rem] text-[#52525b] text-center font-semibold italic">
            We love our customers, so feel free to visit us. 12 Sayed El-Bakry,
            Mohammed Mazhar, Zamalek, Cairo Governorate, Égypte
          </p>
          <button className=" border font-bold text-[#52525b] tracking-[0.2rem] hover:text-white duration-300 hover:bg-[#dc2626] border-[#52525b] hover:border-[#dc2626] py-2 px-4 uppercase text-[1rem]">
            get in touch!
          </button>
        </div>
      </div>
      <div className=" xl:m-[4rem] xs:m-[1rem] text-center">
        <h1 className=" font-serif tracking-wide xs:text-[.8rem] xl:text-[1.4rem]  italic text-[#52525b] font-semibold">
          Connect With Us! We are on Facebook & Instagram & More
        </h1>
        {/* <div className=" grid grid-cols-2 mt-[2rem] gap-[1.2rem] place-items-center">
          <div className="  h-full flex flex-col gap-[2rem] uppercase justify-center">
            <div>
              <h1 className="  text-[#52525b] text-[1.8rem]  italic font-serif font-semibold mb-[.4rem]">
                Still better, visit us in person!
              </h1>
              <p className="text-[#52525b] font-semibold mx-[1rem] text-[1rem]">
                We love our customers, so feel free to visit us.
              </p>
            </div>
            <div>
              <h1 className=" text-[#52525b] text-[1.4rem] italic font-serif font-semibold mb-[.4rem]">
                Loft Gallery
              </h1>
              <p className=" text-[#52525b] mx-[1rem] font-semibold w-[30rem] text-[1rem]">
                12 Sayed El-Bakry, Mohammed Mazhar, Zamalek, Cairo Governorate,
                Égypte
              </p>
            </div>

            <div className=" flex flex-col mt-[6rem]">
              <div className=" flex gap-6 justify-center items-center text-[1rem]  ">
                <div className=" border border-[#52525b] rounded-full p-1 cursor-pointer hover:bg-white hover:text-black">
                  <FaFacebookF />
                </div>
                <div className=" border border-[#52525b] rounded-full p-1 cursor-pointer hover:bg-white hover:text-black">
                  <FaInstagram />
                </div>
                <div className=" border border-[#52525b] rounded-full p-1 cursor-pointer hover:bg-white hover:text-black">
                  <MdOutlineEmail />
                </div>
                <div className=" border border-[#52525b] rounded-full p-1 cursor-pointer hover:bg-white hover:text-black">
                  <FaTiktok />
                </div>
              </div>
              <div className=" flex gap-6 justify-center mt-[1rem]">
                <h1>(+02) 121 095 5561</h1>
                -<FaWhatsapp className=" text-[1.4rem]" />-
                <h1>(+02) 122 2276 680 </h1>
              </div>
            </div>
          </div>
          <div>
            <iframe
              className=" rounded-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7187.29000896313!2d31.220845528704807!3d30.058470104792274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f85b890619b%3A0x375e49f7f5e2be5e!2sThe%20Loft%20Gallery!5e0!3m2!1sid!2sid!4v1731687010250!5m2!1sid!2sid"
              width="500"
              height="420"
              loading="lazy"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
