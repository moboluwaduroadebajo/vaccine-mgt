import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import "@/styles/table-style.css";

import { league_spartan, poppins } from "@/utils/font";
import type { AppProps } from "next/app";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <main className={`${league_spartan} ${poppins}`}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </QueryClientProvider>
  );
}
