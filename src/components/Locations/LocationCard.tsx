import Link from "next/link";
import { Badge, Card } from "react-bootstrap";

export interface LocationCardTypes {
  id?: number;
  name: string;
  dimension: string;
  type: string;
  link: string;
  residents: string[];
}

const LocationCard = ({
  name,
  dimension,
  type,
  residents,
  link,
}: LocationCardTypes) => {
  return (
    <Link href={link}>
      <Card
        bg="dark"
        text="secondary"
        style={{ width: "full" }}
        className="rounded-5 p-3 gap-5"
      >
        <Card.Body>
          <Badge
            pill
            bg="secondary"
            text="dark"
            className="ml-auto fw-semibold font-montserrat"
          >
            {residents.length}
          </Badge>
          <Card.Title className="font-josefin">{name}</Card.Title>
          <Card.Subtitle className="mb-2 font-josefin">{dimension}</Card.Subtitle>
          <Badge pill bg="secondary" text="dark" className="font-montserrat fw-normal">
            {type}
          </Badge>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default LocationCard;
