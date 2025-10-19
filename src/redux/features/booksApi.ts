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
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
