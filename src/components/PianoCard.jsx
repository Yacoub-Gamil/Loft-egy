import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function PianoCard() {
  useGSAP(() => {
    gsap.fromTo(
      "#pianoCard",
      { opacity: 0, y: -5 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);
  return (
    <div id="pianoCard">
      <div className=" p-6 relative ">
        <div className=" w-[60rem]">
          <h1 className=" font-serif text-[3rem] ">
            <span className=" text-[#dc2626]">1.Spotlight</span>{" "}
            <span className=" italic">Erard Piano</span>
          </h1>
          <p className=" mx-[2rem] text-[1.6rem] mt-[2rem] font-serif">
            The Loft is exhibiting an exceptional 19th century piano by the
            piano maker Erard.
          </p>

          <div className=" grid grid-cols-2 mt-[1rem] place-items-center">
            <div className="w-full rounded-md overflow-hidden ">
              <img className=" w-[25rem] h-[30rem]" src="piano-1.jpg" alt="" />
            </div>
            <div className=" flex flex-col gap-8  w-full text-[1.4rem] font-serif mx-[2rem]">
              <p className="">
                Erard was a French instrument maker of German origin who
                specialised in the production of pianos and harps, developing
                the capacities of both instruments and pioneering the modern
                piano.
              </p>
              <p>
                Erard&apos;s pianos were widely appreciated by the foremost
                musicians (Chopin and Liszt). Franz Liszt is said to have played
                a six-octave Érard piano in Paris in 1824.
              </p>

              <a
                className=" border w-[22rem] text-center uppercase px-2 py-3 hover:bg-black hover:text-white duration-300"
                target="blank"
                href="https://en.wikipedia.org/wiki/S%C3%A9bastien_%C3%89rard"
              >
                learn more about erard
              </a>
            </div>
          </div>
        </div>
        <div className=" p-1 absolute top-[3.3rem] right-[4.5rem] ">
          <img
            className=" rounded-md w-[14.2rem] h-[15.8rem]"
            src="piano.jpg"
            alt=""
          />
          <h1 className=" text-center font-serif mt-[0.5rem]">Erard Piano</h1>
        </div>
      </div>
    </div>
  );
}

export default PianoCard;
