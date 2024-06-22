import "@/styles/globals.css";
import { league_spartan, poppins } from "@/utils/font";
import type { AppProps } from "next/app";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${league_spartan} ${poppins}`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

