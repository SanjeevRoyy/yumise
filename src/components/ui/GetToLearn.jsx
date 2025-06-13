import React from "react";
import Slider from "react-slick";

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#951B81] text-white rounded-full p-2 hover:bg-[#7a1568] transition"
      onClick={onClick}
      aria-label="Next Slide"
    >
      &#8250;
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#951B81] text-white rounded-full p-2 hover:bg-[#7a1568] transition"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      &#8249;
    </button>
  );
};

const images = [
  "assets/images/1.jpg",
  "assets/images/2.jpg",
  "assets/images/3.jpg",
  "assets/images/4.jpg",
];

const GetToLearn = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-[#303044] font-poppins text-[30px] font-semibold leading-[60px] tracking-[-0.8px] text-center">
          GET TO LEARN ABOUT
        </h1>
        <h1 className="text-[#951B81] font-poppins text-[40px] font-extrabold leading-[60px] tracking-[-1px] text-center">
          JAPANESE CULTURE
        </h1>
        <p className="text-[#5C5C6F] font-poppins text-[16px] font-bold leading-[24px] mt-5 max-w-4xl text-center">
          Japanese culture is a set of values that puts importance on social
          harmony and hard work. Up until the 10th century, Japanese culture was
          similar to the Chinese culture, but the rise of the samurai in the Heian
          Period and the isolation during the Edo Period changed the rules of
          society. Overall, the culture was influenced by the local Shinto
          religion, Buddhism, Confucianism and the limited natural resources.
          While Japanese lifestyle has been Westernized recently, Japanese people
          still do everything possible to preserve their rich cultural heritage by
          practicing tea ceremony, wearing kimono and studying traditional arts
          and crafts from early childhood.
        </p>

        {/* Carousel */}
        <div className="mt-10 w-full relative">
          <Slider {...settings}>
            {images.map((src, idx) => (
              <div key={idx} className="px-2">
                <img
                  width={400}
                  src={src}
                  alt={`Japanese culture ${idx + 1}`}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default GetToLearn;
