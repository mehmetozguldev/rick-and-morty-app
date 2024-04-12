import React from "react";
import { Card } from "react-bootstrap";

interface CharacterCardProps {
  name: string;
}

export default function CharacterCard({ name }: CharacterCardProps) {
  return (
    <Card
      bg="dark"
      text="secondary"
      style={{ width: "full" }}
      className="rounded-5 p-3 gap-5"
    >
      {name}
    </Card>
  );
}
