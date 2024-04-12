import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>Location: {router.query.slug}</p>;
}
