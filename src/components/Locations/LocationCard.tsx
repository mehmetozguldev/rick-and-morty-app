import Link from "next/link";
import { Badge, Card, Row } from "react-bootstrap";

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
    <Link href={link} style={{ textDecoration: "none" }}>
      <Card
        bg="dark"
        text="secondary"
        style={{ width: "full", border: "none" }}
        className="rounded-5 p-3 gap-5"
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Badge
            pill
            bg="secondary"
            text="dark"
            className="ms-auto mb-2 fw-semibold font-montserrat"
          >
            {residents.length}
          </Badge>
          <Card.Title className="font-josefin">{name}</Card.Title>
          <Card.Subtitle className="mb-3 font-josefin">
            {dimension}
          </Card.Subtitle>
          <Badge
            pill
            bg="secondary"
            text="dark"
            className="font-montserrat fw-normal"
          >
            {type}
          </Badge>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default LocationCard;
