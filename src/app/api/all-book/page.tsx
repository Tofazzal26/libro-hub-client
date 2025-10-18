import BookCard from "@/_components/BookCard/page";
import React from "react";

const AllBook = () => {
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">All Books</h2>
          <div>
            <button>Add Book</button>
          </div>
        </div>
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
