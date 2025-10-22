"use client";
import BookCard from "@/_components/BookCard/page";
import { Book, useGetBooksQuery } from "@/redux/features/booksApi";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import React, { useState } from "react";

const AllBook = () => {
  const [page, setPage] = useState(1);
  const limit = 4;
  const { data, isLoading } = useGetBooksQuery({ page, limit });
  const books = data?.books || [];
  const totalPages = data?.totalPages || 1;

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="my-10">
        {isLoading ? (
          <div className="flex justify-center items-center my-4 lg:my-8">
            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#b8393a]"></div>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">
              {books.map((book: Book, idx: number) => (
                <BookCard key={idx} book={book} />
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="bg-green-800 text-white px-4 cursor-pointer py-[6px] rounded-md disabled:opacity-50"
              >
                <ArrowBigLeftDash />
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`px-4 py-[6px] rounded-md cursor-pointer ${
                    page === index + 1
                      ? "bg-green-700 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className="bg-green-800 text-white px-4 py-[6px] cursor-pointer rounded-md disabled:opacity-50"
              >
                <ArrowBigRightDash />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllBook;
