import { Book, useDeleteBooksMutation } from "@/redux/features/booksApi";
import { BookPlus, Eraser, Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2";
import EditBookModal from "../EditBookModal/page";
interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [deleteBook] = useDeleteBooksMutation();

  const handleDeleteBook = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteBook(id);
        Swal.fire({
          title: "Deleted",
          text: "Your Book has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="lg:px-0 px-2">
      <div className="border-[1px] border-gray-300 rounded-md p-4 h-full">
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
                Copies: {book?.copies}
              </span>
              <span className="bg-gray-200 px-2 py-[6px] text-black absolute right-0 bottom-4 text-[12px] rounded-sm">
                {book?.availability === true ? "In-Stock" : "Out-Stock"}
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-[15px] text-[#64677d]">{book?.author}</h2>
              <h2 className="text-[14px] text-[#64677d]">ISBN: {book?.isbn}</h2>
            </div>
            <h2 className="text-[#64677d] my-2">Genre: {book?.genre}</h2>
            <p className="text-lg text-[#012e4a] ">{book?.title}</p>
            <p className="text-[#64677d] my-2 text-sm">{book?.description}</p>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => handleDeleteBook(book?._id)}
                className="bg-[#b8393a] flex items-center gap-1 px-2 py-[6px] rounded-sm text-white text-sm cursor-pointer"
              >
                Delete <Trash className="text-white" size={14} />
              </button>

              <EditBookModal id={book?._id} />
              <button className="bg-green-800 flex items-center gap-1 px-2 py-[6px] rounded-sm text-white text-sm cursor-pointer">
                Borrow
                <BookPlus className="text-white" size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
