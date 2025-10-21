"use client";
import { useGetBorrowBookQuery } from "@/redux/features/booksApi";
import Image from "next/image";
import React from "react";

const Borrow = () => {
  const { data: borrow, isLoading } = useGetBorrowBookQuery();

  return (
    <div className="container mx-auto">
      <div>
        <div className="lg:px-0 px-2 grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1">
          {borrow?.map((book, idx) => (
            <div
              key={idx}
              className="border-[1px] border-gray-300 rounded-md p-4 h-full"
            >
              <div>
                <div>
                  <div className="bg-[#ebecf0] rounded-md p-14 relative flex items-center justify-center flex-col">
                    <Image
                      src={book?.image}
                      width={152}
                      height={210}
                      alt=""
                      className="w-full"
                    />
                    <span className="bg-gray-200 px-2 py-[6px] text-black absolute left-0 bottom-4 text-[12px] rounded-sm">
                      Quantity: {book?.quantity}
                    </span>
                    <span
                      className={`bg-gray-200 px-2 py-[6px]  absolute right-0 bottom-4 text-[12px] rounded-sm `}
                    >
                      {book?.dueDate}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="mt-6">
                    <h2 className="text-[14px] text-[#64677d]">
                      ISBN: {book?.isbn}
                    </h2>
                  </div>
                  <p className="text-lg text-[#012e4a] ">{book?.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Borrow;
