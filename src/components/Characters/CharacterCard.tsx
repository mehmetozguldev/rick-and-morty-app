import { toggleFavourite } from "@/lib/features/favourites/favouritesSlice";
import { Dot, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CharacterCardProps } from "@/lib/types";
import { Status } from "@/lib/types";

export default function CharacterCard({
  id,
  name,
  status,
  species,
  image,
}: CharacterCardProps) {
  const dispatch = useDispatch();
  const { ids } = useSelector((state: any) => state.favourites);
  const isFavourite = ids.includes(id);

  const statusClass =
    status === Status.Alive
      ? "status-alive"
      : status === Status.Dead
      ? "status-dead"
      : "status-unknown";

  const statusDot =
    status === Status.Alive
      ? "status-alive"
      : status === Status.Dead
      ? "status-dead"
      : "status-unknown";

  return (
    <Card
      bg="dark"
      text="secondary"
      style={{ width: "full", border: "none" }}
      className="rounded-5 px-4 py-4"
    >
      <Button
        className="favourite-wrapper"
        onClick={() => dispatch(toggleFavourite(id))}
      >
        <Heart
          size={38}
          className={isFavourite ? "favourite-heart-active" : "favourite-heart"}
        />
      </Button>
      <Link
        href={`/character/${id}`}
        style={{ textDecoration: "none", color: "unset" }}
      >
        <Image
          src={image}
          alt={name}
          className="rounded-5 mb-4 img-fluid mx-auto"
          style={{ width: "100%", minWidth: "100%" }}
        />
        <Card.Title className="font-montserrat" style={{ fontSize: "1.5rem" }}>
          {name}
        </Card.Title>
        <div className="d-flex flex-row align-items-center">
          <span className={`font-montserrat status-pill ${statusClass}`}>
            <Dot className="{statusDot}" style={{ scale:"2.5" }} />
            {status}
          </span>
          <Dot />
          <span className="font-montserrat">{species}</span>
        </div>
      </Link>
    </Card>
  );
}
