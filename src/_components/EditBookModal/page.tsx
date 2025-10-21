"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  useSingleBookQuery,
  useSingleBookUpdateMutation,
} from "@/redux/features/booksApi";
import { Eraser } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface Iid {
  id: string;
}

interface ISingle {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: string;
  genre: string;
  isbn: number;
  copies: number;
  availability: boolean;
}

const EditBookModal: React.FC<Iid> = ({ id }) => {
  const [open, setOpen] = useState(false);

  const { data: singleBook, isLoading } = useSingleBookQuery(id, {
    skip: !id,
  });

  const [singleBookUpdate, { isLoading: bookUpdateLoading }] =
    useSingleBookUpdateMutation();

  type Inputs = {
    title: string;
    description: string;
    author: string;
    genre: string;
    isbn: number;
    copies: number;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  useEffect(() => {
    if (singleBook) {
      reset({
        title: singleBook.title,
        author: singleBook.author,
        genre: singleBook.genre,
        isbn: singleBook.isbn,
        copies: singleBook.copies,
        description: singleBook.description,
      });
    }
  }, [singleBook, reset]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!id) return;

    const allData = {
      ...data,
      isbn: Number(data.isbn),
      copies: Number(data.copies),
      availability: data.copies === 0 ? false : true,
    };

    try {
      const res = await singleBookUpdate({ id, data: allData });
      toast.success("Book Update Success");
      setOpen(false);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="bg-blue-400 flex items-center gap-1 px-2 py-[6px] rounded-sm text-white text-sm cursor-pointer">
          Edit <Eraser className="text-white" size={14} />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[900px]">
        <DialogTitle>Edit Book</DialogTitle>

        {isLoading ? (
          <div className="flex justify-center items-center my-4 lg:my-8">
            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#b8393a]"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto howCardShadow lg:p-8 p-4 border border-gray-400 rounded-md">
              <div className="flex items-center gap-2 mt-4">
                <div className="flex-1">
                  <label className="text-gray-500">Title *</label>
                  <input
                    type="text"
                    className="py-2 mt-2 mb-4 px-3 w-full bg-[#f3f4f7] border border-[#e5e5e5] outline-none"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div className="flex-1">
                  <label className="text-gray-500">Author *</label>
                  <input
                    type="text"
                    className="py-2 mt-2 mb-4 px-3 w-full bg-[#f3f4f7] border border-[#e5e5e5] outline-none"
                    {...register("author", { required: true })}
                  />
                  {errors.author && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <label className="text-gray-500">Genre *</label>
                  <input
                    type="text"
                    className="py-2 mt-2 mb-4 px-3 w-full bg-[#f3f4f7] border border-[#e5e5e5] outline-none"
                    {...register("genre", { required: true })}
                  />
                  {errors.genre && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div className="flex-1">
                  <label className="text-gray-500">ISBN *</label>
                  <input
                    type="number"
                    className="py-2 mt-2 mb-4 px-3 w-full bg-[#f3f4f7] border border-[#e5e5e5] outline-none"
                    {...register("isbn", { required: true })}
                  />
                  {errors.isbn && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>
              </div>

              <div>
                <label className="text-gray-500">Copies *</label>
                <input
                  type="number"
                  className="py-2 mt-2 mb-4 px-3 w-full bg-[#f3f4f7] border border-[#e5e5e5] outline-none"
                  {...register("copies", { required: true })}
                />
                {errors.copies && (
                  <span className="text-red-500">Required</span>
                )}
              </div>

              <div>
                <label className="text-gray-500">Description *</label>
                <textarea
                  rows={4}
                  className="outline-none px-4 py-4 rounded-md bg-[#f3f4f7] border border-[#d1d5db] w-full"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500">Required</span>
                )}
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-[#074c3e] px-4 py-[10px] text-white rounded-md"
                >
                  {bookUpdateLoading ? "Updating..." : "Update Book"}
                </button>
              </div>
            </div>

            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditBookModal;
