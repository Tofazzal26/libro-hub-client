import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#00453e]">
      <div className="container mx-auto lg:px-0 px-2">
        <div className="flex items-center lg:flex-row flex-col justify-between lg:pt-0 pt-5">
          <div>
            <h2 className="lg:text-[50px] text-3xl text-white">
              {"Baby's"} First{" "}
              <span className="text-[#b8393a]">Christmas </span>
            </h2>
            <p className="lg:text-[18px] text-base text-gray-200 lg:w-[500px] mb-8 mt-5">
              Introduce your little one to the magic of Christmas carols with
              this enchanting book featuring classic holiday tunes.
            </p>
            <button className="text-[20px] bg-[#b8393a] text-white lg:px-8 px-6 py-2 lg:py-[10px]">
              Shop Now
            </button>
          </div>
          <div>
            <Image
              src={"/bannerBook.webp"}
              height={790}
              width={790}
              alt="banner"
              className="lg:w-[780px] lg:h-[780px] w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
