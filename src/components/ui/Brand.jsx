import React from "react";

const brands = [
  { src: "assets/images/brand1.png", alt: "brand1" },
  { src: "assets/images/brand2.png", alt: "brand2" },
  { src: "assets/images/brand3.png", alt: "brand3" },
  { src: "assets/images/brand4.png", alt: "brand4" },
];

const Brand = () => {
  const allBrands = [...brands, ...brands]; // duplicate once for smooth loop

  return (
    <div className="bg-white mt-20 flex justify-center">
      <div className="w-[70%] max-w-[1000px] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-smooth space-x-16">
          {allBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center px-4"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="w-40 h-auto grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
