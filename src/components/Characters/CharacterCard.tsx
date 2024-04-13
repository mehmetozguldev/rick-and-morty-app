import { Heart } from "lucide-react";
import React from "react";
import { Badge, Card, Image } from "react-bootstrap";

interface CharacterCardProps {
  name: string;
  status: string;
  species: string;
  image: string;
}

export default function CharacterCard({
  name,
  status,
  species,
  image,
}: CharacterCardProps) {
  return (
    <Card
      bg="dark"
      text="secondary"
      style={{ width: "full" }}
      className="rounded-5 p-3 gap-5"
    >
      <button className="favourite-wrapper">
        <Heart size={38} className="favourite-heart" />
      </button>
      <Image src={image} alt={name} className="rounded-5" />
      {name}
      <Badge>{status}</Badge>
      <span>{species}</span>
    </Card>
  );
}
