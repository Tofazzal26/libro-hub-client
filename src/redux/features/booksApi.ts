import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Book {
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

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
      providesTags: ["Books"] as const,
    }),
    deleteBooks: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"] as const,
    }),
  }),
});

export const { useGetBooksQuery, useDeleteBooksMutation } = booksApi;
