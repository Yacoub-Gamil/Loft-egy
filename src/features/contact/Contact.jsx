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
    <div id="contact" className="w-[80rem] mx-auto flex items-center flex-col">
      <div>
        <img className=" w-[18rem]" src="loft/loft-logo.png" alt="" />
      </div>

      <div className="w-full bg-cover h-[35rem] bg-[url('loft/bg-4.jpg')] bg-no-repeat flex flex-col  justify-center items-center">
        <div className=" w-[50%] p-4 bg-opacity-80 bg-slate-50 flex  flex-col gap-8 items-center shadow-[0px_0px_20px_5px_#e2e8f0]">
          <h1 className=" text-[2rem] font-semibold italic">
            Questions or Comments?
          </h1>
          <p className=" text-[1.4rem] text-[#52525b] text-center font-semibold italic">
            Feel free to send us a message. We are available for commissions as
            well as for shows. We love to hear what viewers think of our work.
            We look forward to hearing from you.
          </p>
          <button className=" border font-bold text-[#52525b] tracking-[0.2rem] hover:text-white duration-300 hover:bg-[#dc2626] border-[#52525b] hover:border-[#dc2626] py-2 px-4 uppercase text-[1rem]">
            get in touch!
          </button>
        </div>
      </div>
      <div className=" mt-[4rem] text-center">
        <h1 className=" font-serif tracking-wide text-[1.4rem]  italic text-[#52525b] font-semibold border-t">
          Connect With Us! We are on Facebook & Instagram & More
        </h1>
        <div className=" grid grid-cols-2 mt-[2rem] gap-[1.2rem] place-items-center">
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
