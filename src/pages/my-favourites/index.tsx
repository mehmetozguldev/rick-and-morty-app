import { Container } from "react-bootstrap";
import AllFavourites from "@/components/Favourites/AllFavourites";

export default function page() {
  return (
    <Container style={{ padding: "12rem 0" }}>
      <h2 className="font-josefin">My Favourites</h2>
      <p className="font-josefin fw-light">
        Your Favourite Rick & Morty Characters
      </p>
      <AllFavourites />
    </Container>
  );
}
