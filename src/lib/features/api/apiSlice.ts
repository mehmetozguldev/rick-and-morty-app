import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: (pageNumber) => `/location/?page=${pageNumber}`,
    }),
    getLocation: builder.query({
      query: (locationId) => `/location/${locationId}`,
    }),
    getResidents: builder.query({
      query: (residents) => `/character/${residents}`,
    }),
    getResident: builder.query({
      query: (resident) => `/character/${resident}`,
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetLocationQuery,
  useGetResidentsQuery,
  useGetResidentQuery,
} = apiSlice;
