import { Character } from "@/lib/types";
import { Heart, X } from "lucide-react";
import React from "react";
import { Badge, Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "@/lib/features/favourites/favouritesSlice";

const SingleCharacter = ({
  id,
  image,
  name,
  status,
  species,
  type,
  location,
  gender,
}: Character) => {
  const dispatch = useDispatch();
  const { ids } = useSelector((state: any) => state.favourites);

  const isFavourite = ids.includes(id);

  return (
    <Container
      fluid
      style={{
        background: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "0px",
      }}
    >
      <Container
        fluid
        className="black-overlay"
        style={{
          paddingTop: "14rem",
          paddingBottom: "8rem",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container>
          <Row>
            <Col xs={3}>
              <Image
                src={image}
                width="200"
                height="200"
                alt={name}
                className="rounded-4"
              />
            </Col>
            <Col>
              <h2 className="font-montserrat">{name}</h2>
              <Badge>{status}</Badge>
              <span>{species}</span>
              <h3>{type}</h3>
              <p>{location.name}</p>
              <p>{gender}</p>
              <Button
                variant={isFavourite ? "danger" : "primary"}
                className="favourite-button"
                onClick={() => dispatch(toggleFavourite(id))}
              >
                {isFavourite ? (
                  <>
                    <X size={16} /> Remove from Favourites
                  </>
                ) : (
                  <>
                    <Heart size={16} /> Add to Favourites
                  </>
                )}
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default SingleCharacter;
