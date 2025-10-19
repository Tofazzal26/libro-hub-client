"use client";
import BookCard from "@/_components/BookCard/page";
import { useGetBooksQuery } from "@/redux/features/booksApi";
import React from "react";

const AllBook = () => {
  const { data: books, error, isLoading } = useGetBooksQuery();

  console.log(books);

  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div>
          <div>
            <BookCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBook;
