import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import { useGetLocationQuery } from "@/lib/features/api/apiSlice";
import LocationCard, {
  LocationCardTypes,
} from "@/components/Locations/LocationCard";

export default function Page() {
  const router = useRouter();
  const locationId = router.query.id;

  const {
    data: location,
    isFetching,
    isSuccess,
  } = useGetLocationQuery(locationId);

  let content;

  if (isFetching) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = (
      <LocationCard
        link="/"
        key={location.id}
        name={location.name}
        type={location.type}
        dimension={location.dimension}
        residents={location.residents}
      />
    );
  }

  return <>{content}</>;
}
