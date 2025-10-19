import { Book } from "@/redux/features/booksApi";
import { BookPlus, Eraser, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="lg:px-0 px-2">
      <div className="border-[1px] border-gray-300 rounded-md p-4">
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
              <button className="bg-[#b8393a] flex items-center gap-1 px-2 py-[6px] rounded-sm text-white text-sm">
                Delete <Trash className="text-white" size={14} />
              </button>
              <button className="bg-blue-400 flex items-center gap-1 px-2 py-[6px] rounded-sm text-white text-sm">
                Edit <Eraser className="text-white" size={14} />
              </button>
              <button className="bg-green-800 flex items-center gap-1 px-2 py-[6px] rounded-sm text-white text-sm">
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
