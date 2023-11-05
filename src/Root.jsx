import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { SWRConfig } from "swr";

async function fetcher(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };

//   Lo avevo impostato già dal primo esercizio.

export function Root() {
    return (
        <SWRConfig value={{ fetcher }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SWRConfig>
    )
}