import { json, LoaderFunctionArgs } from "react-router-dom";
import { ItemProps, ItemType } from "./components/navbar/module";

export interface PortfolioLoaderProps {
  navigation: ItemProps[];
}

export function portfolioLoader({ request, params }: LoaderFunctionArgs) {
  const data: PortfolioLoaderProps = {
    navigation: [
      {
        type: ItemType.LinkItem,
        linkItem: {
          title: "LinkItem 1",
          to: "me",
          tooltip: "Hello There!",
        },
      },
      {
        type: ItemType.LinkItem,
        linkItem: {
          title: "LinkItem 2",
          to: "",
        },
      },
      {
        type: ItemType.LinkItem,
        linkItem: {
          title: "LinkItem 3",
          to: "",
        },
      },
      {
        type: ItemType.LinkItem,
        linkItem: {
          title: "LinkItem 4",
          to: "",
        },
      },
    ],
  };
  return json(data, { status: 200 });
}
