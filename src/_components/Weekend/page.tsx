"use client";
import Image from "next/image";
import React from "react";

const Weekend = () => {
  return (
    <div className="container mx-auto lg:my-20 my-10">
      <div className="flex lg:items-center lg:flex-row flex-col justify-between gap-4">
        <div className="bg-[#fb7a14] lg:p-8 px-6 flex-1">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h2 className="lg:text-lg text-base">Up To 20% Off</h2>
              <h2 className="lg:text-4xl text-2xl py-2">Best Weekend</h2>
              <button>Shop Now</button>
            </div>
            <div>
              <Image src="/end1.png" width={300} height={300} alt="end" />
            </div>
          </div>
        </div>
        <div className="bg-[#fecd05] lg:p-8 px-6 flex-1">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="lg:text-lg text-base">Special Offer</h2>
              <h2 className="lg:text-4xl text-2xl py-2">Nice Bookshelf.</h2>
              <button>Shop Now</button>
            </div>
            <div>
              <Image src="/end2.png" width={255} height={255} alt="end" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weekend;
