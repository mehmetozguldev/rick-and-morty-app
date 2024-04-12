import React from "react";
import { Container, Spinner } from "react-bootstrap";

import {
  useGetLocationQuery,
  useGetResidentsQuery,
} from "@/lib/features/api/apiSlice";
import CharacterCard from "../Characters/CharacterCard";

interface SingleLocationTypes {
  locationId: string | string[] | undefined;
  ids: number[];
  title: string;
  residents: string[];
}

export default function SingleLocation({
  locationId,
  ids,
  title,
  residents,
}: SingleLocationTypes) {
  const { data, isLoading, isSuccess, isError, error } =
    useGetResidentsQuery(ids);

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = data.map((resident: any) => (
      <CharacterCard key={resident.id} name={resident.name} />
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <Container style={{ padding: "128px 0" }}>
      <h2>{title} Characters</h2>
      <p>Characters living and having lived in {title}.</p>
      <section className="card-grid">{content}</section>
    </Container>
  );
}