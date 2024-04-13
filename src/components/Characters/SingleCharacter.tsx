import { Character } from "@/lib/types";
import { Heart, X } from "lucide-react";
import React from "react";
import {
  Alert,
  Badge,
  Button,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavourite,
  hideAlert,
} from "@/lib/features/favourites/favouritesSlice";

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
  const { showAlert, alertContent, ids } = useSelector(
    (state: any) => state.favourites
  );

  const isFavourite = ids.includes(id);

  return (
    <Container style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      {showAlert && (
        <Alert
          variant={isFavourite ? "success" : "danger"}
          onClose={() => dispatch(hideAlert())}
          dismissible
        >
          {alertContent}
        </Alert>
      )}

      <Row>
        <Col xs={3}>
          <Image
            src={image}
            width={200}
            height={200}
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
  );
};

export default SingleCharacter;
