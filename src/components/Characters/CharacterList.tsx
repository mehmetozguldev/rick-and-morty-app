import React from "react";

import { useGetResidentsQuery } from "@/lib/features/api/apiSlice";
import CharacterCard from "./CharacterCard";
import { Spinner } from "react-bootstrap";

interface CharacterListProps {
  filter: number[];
}

export default function CharacterList({ filter }: CharacterListProps) {
  const {
    data: residents,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetResidentsQuery({ filter });

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = residents.map((resident: any) => (
      <CharacterCard key={resident.id} />
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return { content };
}
