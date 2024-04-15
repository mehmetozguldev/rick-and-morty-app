import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

import { useGetResidentsQuery } from "@/lib/features/api/apiSlice";
import CharacterCard from "../Characters/CharacterCard";
import { Character } from "@/lib/types";

interface SingleLocationTypes {
  ids: number[];
  title: string;
}

export default function SingleLocation({ ids, title }: SingleLocationTypes) {
  const { data, isLoading, isSuccess } = useGetResidentsQuery(ids);
  const [normalizedData, setNormalizedData] = useState<Character[]>([]);

  useEffect(() => {
    if (isSuccess) {
      if (!Array.isArray(data)) {
        setNormalizedData([data]);
      } else {
        setNormalizedData(data);
      }
    }
  }, [data, isSuccess]);

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (normalizedData.length > 0) {
    content = normalizedData.map((resident: any) => (
      <CharacterCard
        key={resident.id}
        id={resident.id}
        name={resident.name}
        status={resident.status}
        species={resident.species}
        image={resident.image}
      />
    ));
  } else {
    content = <p>No characters found.</p>;
  }

  return (
    <Container style={{ padding: "12rem 0" }}>
      <h2 className="font-josefin">{title} Characters</h2>
      <p className="font-josefin fw-light">
        Characters living and having lived in {title}.
      </p>
      <section className="card-grid mb-5">{content}</section>
    </Container>
  );
}
