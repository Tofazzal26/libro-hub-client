"use client";
import { useBookPostMutation } from "@/redux/features/booksApi";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const AdBook = () => {
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
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [images, setImages] = useState<File | null>(null);
  const [bookPost, { isLoading }] = useBookPostMutation();
  const router = useRouter();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImages(file);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!images) return toast.error("No image selected!");
    try {
      const formData = new FormData();
      formData.append("image", images);

      // Upload image to ImgBB
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: { key: process.env.NEXT_PUBLIC_ImageBB_API_Key },
        }
      );
      const image = response.data.data.url;

      const allData = {
        image,
        title: data.title,
        description: data.description,
        author: data.author,
        genre: data.genre,
        isbn: Number(data.isbn),
        copies: Number(data.copies),
        availability: true,
      };

      await bookPost(allData).unwrap();
      router.push("/api/all-book");
      reset();
      setImages(null);
      toast.success("Book added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="container mx-auto my-10">
      <div className="lg:w-[800px] mx-auto howCardShadow lg:p-8 p-4 border-[1px] border-gray-400 rounded-md">
        <div className="text-center">
          <h1 className="text-lg md:text-3xl">Add Your Book</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="lg:mt-10 mt-6">
          <div className="mb-4">
            <label className="text-gray-500 text-[20px]">Book Image *</label>
            <br />
            <input
              type="file"
              onChange={handleImageChange}
              className="file-input w-full bg-[#f3f4f7] text-gray-500 text-[17px] py-[15px] lg:py-[20px] mt-2 px-5"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="text-gray-500">Title *</label>
              <br />
              <input
                type="text"
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-500">
                  This Title field is required
                </span>
              )}
            </div>

            <div className="flex-1">
              <label className="text-gray-500">Author Name *</label>
              <br />
              <input
                type="text"
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
                {...register("author", { required: true })}
              />
              {errors.author && (
                <span className="text-red-500">
                  This Author field is required
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="text-gray-500">Genre *</label>
              <br />
              <input
                type="text"
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
                {...register("genre", { required: true })}
              />
              {errors.genre && (
                <span className="text-red-500">
                  This Genre field is required
                </span>
              )}
            </div>

            <div className="flex-1">
              <label className="text-gray-500">ISBN Code *</label>
              <br />
              <input
                type="number"
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
                {...register("isbn", { required: true })}
              />
              {errors.isbn && (
                <span className="text-red-500">
                  This ISBN field is required
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="text-gray-500">Copies *</label>
            <br />
            <input
              type="number"
              className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
              {...register("copies", { required: true })}
            />
            {errors.copies && (
              <span className="text-red-500">
                This Copies field is required
              </span>
            )}
          </div>

          <div className="mt-4">
            <label className="text-gray-500">Description *</label>
            <textarea
              cols={20}
              rows={5}
              className="outline-none px-4 py-4 rounded-md bg-[#f3f4f7] border-[1px] border-[#d1d5db] w-full"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <span className="text-red-500">
                This Description field is required
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className={`px-4 py-[10px] cursor-pointer rounded-md text-white ${
                isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#074c3e]"
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="animate-spin mx-auto" size={25} />
              ) : (
                "Add Book"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdBook;
