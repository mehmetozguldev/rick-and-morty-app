import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => "/location",
    }),
    getLocation: builder.query({
      query: (locationId) => `/location/${locationId}`,
    }),
    getResident: builder.query({
      query: (residentId) => `/character/${residentId},`,
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetLocationQuery,
  useGetResidentQuery,
} = apiSlice;
