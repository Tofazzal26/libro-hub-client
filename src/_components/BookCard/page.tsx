import { BookPlus, Eraser, NotebookPen, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const BookCard = () => {
  return (
    <div className="w-[400px]">
      <div className="border-[1px] border-gray-300 rounded-md p-4">
        <div>
          <div>
            <div className="bg-[#f5f5f5] rounded-md p-14 relative">
              <Image src={"/book11.png"} width={152} height={210} alt="" />
              <span className="bg-gray-200 px-2 py-[6px] text-black absolute left-0 bottom-4 text-[12px] rounded-sm">
                Copies: 20
              </span>
              <span className="bg-gray-200 px-2 py-[6px] text-black absolute right-0 bottom-4 text-[12px] rounded-sm">
                In-Stock
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-[15px] text-[#64677d]">Tofazzal Hossain</h2>
              <h2 className="text-[14px] text-[#64677d]">ISBN: 23235434</h2>
            </div>
            <h2 className="text-[#64677d] my-2">Genre: Self-Help</h2>
            <p className="text-lg text-[#012e4a] ">The Hidden Mystery Behind</p>
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
