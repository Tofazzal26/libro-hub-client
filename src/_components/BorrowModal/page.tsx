"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { BookPlus } from "lucide-react";
import toast from "react-hot-toast";
import { useBorrowBookMutation } from "@/redux/features/booksApi";
import { useRouter } from "next/navigation";

interface IId {
  id: string;
  title: string;
  isbn: number;
  copies: number;
  image: string;
}

interface Inputs {
  quantity: number;
  dueDate: string;
}

const BorrowModal: React.FC<IId> = ({ id, title, isbn, copies, image }) => {
  const [open, setOpen] = useState(false);
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const quantity = Number(data.quantity);
    const dueDate = data.dueDate;

    if (quantity > copies) {
      return toast.error("The quantity exceeds the number of copies.");
    }

    const allData = {
      quantity,
      dueDate,
      title,
      isbn,
      image,
      bookId: id,
    };

    try {
      const res = await borrowBook({ bookId: id, data: allData }).unwrap();

      toast.success("Book borrowed successfully!");
      reset();
      setOpen(false);
      router.push("/api/borrow");
    } catch (err) {
      toast.error("Failed to borrow the book!");
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-green-800 flex items-center gap-1 px-2 py-[6px] rounded-sm text-white text-sm cursor-pointer">
          Borrow
          <BookPlus className="text-white" size={14} />
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Quantity</label>
            <Input
              type="number"
              {...register("quantity", { required: true })}
              placeholder="Enter quantity"
              min={1}
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Due Date</label>
            <Input
              type="date"
              {...register("dueDate", { required: true })}
              disabled={isLoading}
            />
          </div>

          <button
            className={`w-full bg-green-800 rounded-md py-2 text-white flex items-center justify-center gap-2 cursor-pointer ${
              isLoading ? "opacity-60 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Borrowing..." : "Borrow"}
            <BookPlus className="text-white" size={14} />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowModal;
