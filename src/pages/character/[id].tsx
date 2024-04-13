import SingleCharacter from "@/components/Characters/SingleCharacter";
import { useGetResidentQuery } from "@/lib/features/api/apiSlice";
import { useRouter } from "next/router";
import { Container, Spinner } from "react-bootstrap";

export default function Page() {
  const router = useRouter();
  const characterId = router.query.id;

  const {
    data: character,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetResidentQuery(characterId);

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = (
      <SingleCharacter
        id={character.id}
        key={character.id}
        image={character.image}
        name={character.name}
        status={character.status}
        species={character.species}
        type={character.type}
        location={character.location}
        gender={character.gender}
      />
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <>
      {content}
      <Container>
        <h2>Other Characters</h2>
      </Container>
    </>
  );
}
