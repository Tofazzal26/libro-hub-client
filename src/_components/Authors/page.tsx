"use client";
import Image from "next/image";
import React from "react";

const Authors = () => {
  return (
    <div className="container mx-auto lg:my-10 my-6">
      <div>
        <h2 className="lg:text-[40px] text-3xl mb-6">Favorite Authors</h2>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-2">
        <div className="flex items-center flex-col text-center">
          <div>
            <Image src={"/2.webp"} width={327} height={327} alt="author" />
          </div>
          <div>
            <h2 className="text-2xl mt-4">Warren Grahams</h2>
            <p className="text-sm text-gray-400 pt-2">8 Published Books</p>
          </div>
        </div>
        <div className="flex items-center flex-col text-center">
          <div>
            <Image src={"/1.webp"} width={327} height={327} alt="author" />
          </div>
          <div>
            <h2 className="text-2xl mt-4">Warren Grahams</h2>
            <p className="text-sm text-gray-400 pt-2">8 Published Books</p>
          </div>
        </div>
        <div className="flex items-center flex-col text-center">
          <div>
            <Image src={"/3.webp"} width={327} height={327} alt="author" />
          </div>
          <div>
            <h2 className="text-2xl mt-4">Warren Grahams</h2>
            <p className="text-sm text-gray-400 pt-2">8 Published Books</p>
          </div>
        </div>
        <div className="flex items-center flex-col text-center">
          <div>
            <Image src={"/4.webp"} width={327} height={327} alt="author" />
          </div>
          <div>
            <h2 className="text-2xl mt-4">Warren Grahams</h2>
            <p className="text-sm text-gray-400 pt-2">8 Published Books</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
