import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useGetResidentsQuery } from "@/lib/features/api/apiSlice";
import { Spinner } from "react-bootstrap";
import CharacterCard from "../Characters/CharacterCard";
import { Character } from "@/lib/types";

const AllFavourites = () => {
  const ids = useSelector((state: RootState) => state.favourites.ids);
  const { data, isLoading, isSuccess, isError, error } =
    useGetResidentsQuery(ids);
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
    content = normalizedData.map((resident) => (
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
    content = <p>No favourites found.</p>;
  }

  let renderedFavourites = <p> No favourite found.</p>;

  if (ids.length > 0) {
    renderedFavourites = <section className="card-grid">{content}</section>;
  }

  return <>{renderedFavourites}</>;
};

export default AllFavourites;
