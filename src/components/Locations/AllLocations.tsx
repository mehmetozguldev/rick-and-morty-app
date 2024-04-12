import React from "react";
import { Container, Pagination, Spinner } from "react-bootstrap";
import LocationCard, { LocationCardTypes } from "./LocationCard";

import { useGetLocationsQuery } from "@/lib/features/api/apiSlice";

const AllLocations = () => {
  let active: number = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const {
    data: locations,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLocationsQuery({ active });

  let location;

  if (isLoading) {
    location = <Spinner animation="grow" variant="primary" />;
  } else if (isSuccess) {
    location = locations.results.map((location: LocationCardTypes) => (
      <LocationCard
        key={location.id}
        name={location.name}
        type={location.type}
        dimension={location.dimension}
        residents={location.residents}
      />
    ));
  } else if (isError) {
    location = <div>{error.toString()}</div>;
  }

  return (
    <Container style={{ padding: "128px 0" }}>
      <h2>All Locations</h2>
      <section className="card-grid">{location}</section>
      <Pagination>{items}</Pagination>
    </Container>
  );
};

export default AllLocations;
