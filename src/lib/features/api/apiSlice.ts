import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => "/location",
    }),
  }),
});

export const { useGetLocationsQuery } = apiSlice;
