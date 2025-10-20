"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eraser } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Iid {
  id: string | null;
}

const EditBookModal: React.FC<Iid> = ({ id }) => {
  console.log(id, "modal");
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
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const title = data.title;
      const description = data.description;
      const author = data.author;
      const genre = data.genre;
      const isbn = Number(data.isbn);
      const copies = Number(data.copies);
      const allData = {
        title,
        description,
        author,
        genre,
        isbn,
        copies,
        availability: true,
      };
      console.log(allData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <button className="bg-blue-400 flex items-center gap-1 px-2 py-[6px] rounded-sm text-white text-sm cursor-pointer">
              Edit <Eraser className="text-white" size={14} />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[900px]">
            <DialogTitle></DialogTitle>
            <div>
              <div>
                <div>
                  <div className="mx-auto howCardShadow lg:p-8 p-4 border-[1px] border-gray-400 rounded-md">
                    <div className="text-center">
                      <h1 className=" text-lg md:text-3xl">Edit Book</h1>
                    </div>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="lg:mt-10 mt-6"
                    >
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
                      </div>
                      <div>
                        <div className="mt-4">
                          <label className="text-gray-500">Description *</label>
                          <textarea
                            cols={20}
                            rows={5}
                            className="outline-none px-4 py-4 rounded-md bg-[#f3f4f7] border-[1px] border-[#d1d5db] w-full"
                            placeholder=""
                            {...register("description", { required: true })}
                          ></textarea>
                          {errors.description && (
                            <span className="text-red-500">
                              This Description field is required
                            </span>
                          )}
                          <div className="flex justify-end mt-2">
                            <button
                              type="submit"
                              className="bg-[#074c3e] cursor-pointer px-4 py-[10px] text-white rounded-md"
                            >
                              {/* {addReviewLoading ? (
                              <span className="text-white flex items-center px-4 justify-center text-lg">
                                <Loader className="animate-spin" size={25} />
                              </span>
                            ) : (
                              "Submit Story"
                            )} */}
                              Update Book
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default EditBookModal;
