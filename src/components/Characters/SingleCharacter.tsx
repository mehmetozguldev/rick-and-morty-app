import { Character, Status } from "@/lib/types";
import { Dot, Heart, X } from "lucide-react";
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

  const statusClass =
    status === Status.Alive
      ? "status-alive"
      : status === Status.Dead
      ? "status-dead"
      : "status-unknown";

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
                className="rounded-4 img-fluid"
                style={{ width: "100%" }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <h2 className="font-montserrat">{name}</h2>
              <div className="d-flex flex-row align-items-center mb-3">
                <span className={`font-montserrat status-pill ${statusClass}`}>
                  <Dot style={{ scale: "2.5" }} />
                  {status}
                </span>
                <Dot />
                <span className="font-montserrat">{species}</span>
              </div>
              <div>
                <h3 style={{ fontSize: "24px" }} className="font-montserrat mb-1">{type}</h3>
                <p
                  style={{ textDecoration: "underline" }}
                  className="font-montserrat mb-0"
                >
                  {location.name}
                </p>
                <p className="font-montserrat">{gender}</p>
              </div>
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
