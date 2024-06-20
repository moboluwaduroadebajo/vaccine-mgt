import "@/styles/globals.css";
import { league_spartan, poppins } from "@/utils/font";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${league_spartan} ${poppins}`}>
      <Component {...pageProps} />
    </main>
  );
}

