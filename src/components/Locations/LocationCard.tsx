import { Badge, Card } from "react-bootstrap";

export interface LocationCardTypes {
  id?: number;
  name: string;
  dimension: string;
  type: string;
  residents: string[];
}

const LocationCard = ({
  name,
  dimension,
  type,
  residents,
}: LocationCardTypes) => {
  return (
    <Card
      bg="dark"
      text="secondary"
      style={{ width: "full" }}
      className="rounded-5 p-3 gap-5"
    >
      <Card.Body>
        <Badge pill bg="secondary" text="dark" className="ml-auto">
          {residents.length}
        </Badge>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2">{dimension}</Card.Subtitle>
        <Badge pill bg="secondary" text="dark">
          {type}
        </Badge>
      </Card.Body>
    </Card>
  );
};

export default LocationCard;
