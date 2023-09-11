import { json, LoaderFunctionArgs } from "react-router-dom";
import {ApiLinkProps} from "./components";

export interface PortfolioLoaderProps {
  navigation: ApiLinkProps[];
}

export function portfolioLoader({ request, params }: LoaderFunctionArgs) {
  const data: PortfolioLoaderProps = {
    navigation: [
      {
        id: "finallyHome",
        title: "Home",
        to: {
          pathname: "/portfolio",
          hash: "#home"
        },
        preventScrollReset: true
      },
      {
        id: "finallyMe",
        title: "Mee",
        to: {
          pathname: "/portfolio",
          hash: "#me"
        },
        tooltip: "Hello There!",
        preventScrollReset: true
      },
      {
        id: "finallyResume",
        title: "Resume",
        to: {
          pathname: "/portfolio",
          hash: "#resume"
        },
        preventScrollReset: true
      },
    ],
  };
  return json(data, { status: 200 });
}
