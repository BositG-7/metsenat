import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
/* eslint-disable  */
import { Containers } from "modules/auth";
import ReactDOM from "react-dom/client";
import { Routes } from "routes";

import "assets/styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <MantineProvider withNormalizeCSS>
      <Containers.Auth>
        <Routes />
        <Notifications position="top-right" autoClose={4000} />
      </Containers.Auth>
    </MantineProvider>
  </BrowserRouter>
);
