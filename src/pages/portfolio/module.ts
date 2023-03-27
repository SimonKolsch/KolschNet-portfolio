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
        },
      },
      {
        type: ItemType.LinkItem,
        linkItem: {
          title: "LinkItem 2",
        },
      },
      {
        type: ItemType.LinkItem,
        linkItem: {
          title: "LinkItem 3",
        },
      },
      {
        type: ItemType.LinkItem,
        linkItem: {
          title: "LinkItem 4",
        },
      },
    ],
  };
  return json(data, { status: 200 });
}
