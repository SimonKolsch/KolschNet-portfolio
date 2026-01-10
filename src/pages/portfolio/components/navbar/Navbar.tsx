import React from "react";
import { ItemProps, ItemType, NavbarProps } from "./module";
import {LinkItem} from "./link";
import classes from "./navbar.module.css"
import {AppShell} from "@mantine/core";

export const Navbar: React.FC<NavbarProps> = ({ opened, items }) => {

  const navbar = items.map((navItem) => {
    return getNavItem(navItem);
  });

  return (
      <AppShell navbar={{breakpoint:"sm", width:{ sm: 100, lg: 200 }, collapsed: {desktop: false, mobile: !opened}}}
      >
        <AppShell.Section className={classes.navbar} grow>
          {navbar}
        </AppShell.Section>

        {/* Last section with normal height (depends on section content) */}
        <AppShell.Section>Last section</AppShell.Section>
      </AppShell>
  );
};

const getNavItem = (item: ItemProps): React.ReactNode => {
  switch (item.type) {
    case ItemType.LinkItem:
    default:
      if (item?.linkItem == null) {
        console.log("No item for item type");
        break;
      }
      return <LinkItem {...item.linkItem} />;
  }
};
