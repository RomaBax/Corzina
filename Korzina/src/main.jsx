import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes";

import { BrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import BasketProvider from "./context/BasketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BasketProvider>
      <RouterProvider router={router} />
    </BasketProvider>
  </ChakraProvider>
);
