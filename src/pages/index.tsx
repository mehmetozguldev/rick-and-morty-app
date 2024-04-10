import Image from "next/image";
import { Josefin_Sans, Montserrat } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${josefinSans.className}`}
    >
Home
    </main>
  );
}
