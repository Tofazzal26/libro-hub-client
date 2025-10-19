"use client";
import BookCard from "@/_components/BookCard/page";
import { useGetBooksQuery } from "@/redux/features/booksApi";
import React from "react";

const AllBook = () => {
  const { data: books, isLoading } = useGetBooksQuery();

  console.log(books);

  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div>
          {isLoading ? (
            <div className="flex justify-center items-center my-4 lg:my-8">
              <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#b8393a]"></div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">
              {books?.map((book, idx) => (
                <BookCard key={idx} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBook;
