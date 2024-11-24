import Slider from "react-slick";

function HeroSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className=" w-[85rem] mb-[5.2rem] mx-auto">
      <Slider {...settings}>
        <div className=" w-full h-[35rem] shadow-[inset_0px_0px_10px_10px_#f7fafc] bg-no-repeat bg-[url('loft/bg-2.jpg')]"></div>
        <div className=" w-full h-[35rem] shadow-[inset_0px_0px_10px_10px_#f7fafc] bg-no-repeat bg-[url('loft/bg-1.jpg')] "></div>
        <div className=" w-full h-[35rem] shadow-[inset_0px_0px_10px_10px_#f7fafc] bg-no-repeat bg-[url('loft/bg-3.jpg')] "></div>
        <div className=" w-full h-[35rem] shadow-[inset_0px_0px_10px_10px_#f7fafc] bg-no-repeat bg-[url('loft/bg-4.jpg')] "></div>
        <div className=" w-full h-[35rem] shadow-[inset_0px_0px_10px_10px_#f7fafc] bg-no-repeat bg-[url('loft/bg-5.jpg')] "></div>
        <div className=" w-full h-[35rem] shadow-[inset_0px_0px_10px_10px_#f7fafc] bg-no-repeat bg-[url('loft/bg-6.jpg')] "></div>
      </Slider>
    </div>
  );
}

export default HeroSlider;
