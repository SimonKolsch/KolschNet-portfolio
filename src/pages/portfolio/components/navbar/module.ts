import { LinkItemProps } from "./link";

export interface NavbarProps {
  opened: boolean;

  items: ItemProps[];
}

export interface ItemProps {
  type: ItemType;
  linkItem?: LinkItemProps;
  // group?: ItemGroupProps;
}

export enum ItemType {
  LinkItem,
  //GROUP,
  //COLLAPSE,
  //DIVIDER,
}

export interface ItemGroupProps {
  title: string;
  caption?: string;
  children?: ItemProps[];
}