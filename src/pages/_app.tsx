import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/lib/store";
import { persistor } from "@/lib/store";

import { Josefin_Sans, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import { PersistGate } from "redux-persist/integration/react";

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
      <PersistGate loading={null} persistor={persistor}>
        <main
          className={`${montserrat.variable} ${josefinSans.variable} bg-black`}
          data-bs-theme="dark"
        >
          <Header />
          <Component {...pageProps} />
        </main>
      </PersistGate>
    </Provider>
  );
}
