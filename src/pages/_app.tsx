import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { Josefin_Sans, Montserrat } from "next/font/google";
import Header from "@/components/Header";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${montserrat.variable} ${josefinSans.variable}`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
