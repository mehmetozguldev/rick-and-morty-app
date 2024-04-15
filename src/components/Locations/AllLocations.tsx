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

  const paginationItems = [];
  if (locations && locations.info) {
    const totalPages = locations.info.pages;
    const maxPaginationItems = 5;
    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxPaginationItems / 2)
    );
    let endPage = Math.min(totalPages, startPage + maxPaginationItems - 1);

    if (endPage - startPage + 1 < maxPaginationItems) {
      const diff = maxPaginationItems - (endPage - startPage + 1);
      if (startPage === 1) {
        endPage = Math.min(totalPages, endPage + diff);
      } else {
        startPage = Math.max(1, startPage - diff);
      }
    }

    for (let number = startPage; number <= endPage; number++) {
      paginationItems.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePaginationClick(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
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
          {paginationItems}
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
