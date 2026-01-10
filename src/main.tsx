import '@mantine/core/styles.css';
import React from "react";
import ReactDOM from "react-dom/client";
import {createTheme, CSSVariablesResolver, MantineProvider, rem} from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./setup";

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
});

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--header-height': rem(60)
  },
  light: {

  },
  dark:  {

  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider cssVariablesResolver={resolver} theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
