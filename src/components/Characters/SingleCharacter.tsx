import { Character, Status } from "@/lib/types";
import { Dot, Heart, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "@/lib/features/favourites/favouritesSlice";
import CharacterCard from "./CharacterCard";
import {
  useGetLocationQuery,
  useGetResidentsQuery,
} from "@/lib/features/api/apiSlice";

const SingleCharacter = ({
  id,
  image,
  name,
  status,
  species,
  type,
  location,
  locationId,
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

  const { data, isLoading, isSuccess } = useGetResidentsQuery(ids);
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
    content = normalizedData.map((resident: any) => (
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
    content = <p>No characters found.</p>;
  }

  let locationIds: string[] = [];

  const {
    data: locationData,
    isLoading: isLocationLoading,
    isSuccess: isLocationSuccess,
  } = useGetLocationQuery(locationId);

  if (isLocationSuccess) {
    const locationIds = locationData.residents.map((residentUrl: any) => {
      const residentId = residentUrl.match(/\/(\d+)$/)[1];
      return residentId;
    });
  }

  let otherResidentsContent;

  const {
    data: otherResidentsData,
    isLoading: isOtherResidentsLoading,
    isSuccess: isOtherResidentsSuccess,
  } = useGetResidentsQuery(locationIds);

  if (isOtherResidentsLoading) {
    otherResidentsContent = <Spinner />;
  } else if (isOtherResidentsSuccess) {
    otherResidentsContent = otherResidentsData.results.map(
      (resident: Character) => (
        <CharacterCard
          key={resident.id}
          id={resident.id}
          name={resident.name}
          status={resident.status}
          species={resident.species}
          image={resident.image}
        />
      )
    );
  } else {
    otherResidentsContent = <p>No other characters found.</p>;
  }
  return (
    <>
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
                  <span
                    className={`font-montserrat status-pill ${statusClass}`}
                  >
                    <Dot style={{ scale: "2.5" }} />
                    {status}
                  </span>
                  <Dot />
                  <span className="font-montserrat">{species}</span>
                </div>
                <div>
                  <h3
                    style={{ fontSize: "24px" }}
                    className="font-montserrat mb-1"
                  >
                    {type}
                  </h3>
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
      <Container style={{ padding: "4rem 0 12rem 0" }}>
        <h2 className="font-montserrat mb-3">Other Characters</h2>
        <section className="card-grid mb-5">{otherResidentsContent}</section>
      </Container>
    </>
  );
};

export default SingleCharacter;
