import React, { useState } from "react";
import { Container, Pagination, Spinner } from "react-bootstrap";
import LocationCard, { LocationCardTypes } from "./LocationCard";

import { useGetLocationsQuery } from "@/lib/features/api/apiSlice";

const AllLocations = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: locations,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetLocationsQuery(currentPage);

  const handlePaginationClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
    refetch();
  };

  let location;

  if (isLoading) {
    location = <Spinner animation="grow" variant="primary" />;
  } else if (isSuccess) {
    console.log(locations);
    if (locations) {
      // const startIndex = (currentPage - 1) * 15;
      // const endIndex = currentPage * 15;

      // const slicedLocations = locations.results.slice(startIndex, endIndex);

      location = locations.results.map((location: LocationCardTypes) => (
        <LocationCard
          link={`/locations/${location.id}`}
          key={location.id}
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          residents={location.residents}
        />
      ));
    }
  } else if (isError) {
    location = <div>{error.toString()}</div>;
  }

  return (
    <Container style={{ padding: "12rem 0" }}>
      <h2 className="font-montserrat mb-5">All Locations</h2>
      <section className="card-grid mb-5">{location}</section>
      <div
        style={{
          display: "flex",
        }}
      >
        <Pagination style={{ margin: "auto", gap: "12px" }}>
          <Pagination.Prev
            className="pagination-arrow font-montserrat"
            onClick={() =>
              currentPage > 1 && handlePaginationClick(currentPage - 1)
            }
            disabled={currentPage === 1}
          />
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Next
            className="pagination-arrow font-montserrat"
            onClick={() =>
              currentPage < locations.info.pages &&
              handlePaginationClick(currentPage + 1)
            }
            disabled={
              !locations ||
              !locations.info ||
              currentPage === locations.info.pages
            }
          />
        </Pagination>
      </div>
    </Container>
  );
};

export default AllLocations;
