import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import { useGetLocationQuery } from "@/lib/features/api/apiSlice";
import SingleLocation from "@/components/Locations/SingleLocation";

export default function Page() {
  const router = useRouter();
  const locationId = router.query.id;

  const {
    data: location,
    isFetching,
    isSuccess,
  } = useGetLocationQuery(locationId);

  let content;
  let ids;

  const extractIdsFromUrls = (urls: string[]): number[] => {
    return urls.map((url) => {
      const lastSlashIndex = url.lastIndexOf("/");
      return parseInt(url.substring(lastSlashIndex + 1), 10);
    });
  };

  if (isFetching) {
    content = <Spinner />;
  } else if (isSuccess) {
    ids = extractIdsFromUrls(location.residents);
    console.log(ids);
    content = (
      <SingleLocation
        ids={ids}
        title={location.name}
        locationId={locationId}
        residents={location.residents}
      />
    );
  }

  return <>{content}</>;
}
