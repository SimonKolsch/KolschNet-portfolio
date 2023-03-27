import React from "react";
import { Box, createStyles, Navbar as MantineNavbar } from "@mantine/core";
import { ItemProps, ItemType, NavbarProps } from "./module";
import { LinkItem } from "./link";

export * from "./module";
export * from "./link";

const useStyles = createStyles((theme) => ({}));

export const Navbar: React.FC<NavbarProps> = ({ opened, items }) => {
  const { classes, theme } = useStyles();

  const navbar = items.map((navItem) => {
    return getNavItem(navItem);
  });

  return (
    <React.Fragment>
      <MantineNavbar
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 200, lg: 300 }}
      >
        {/*<MantineNavbar.Section>{navbar}</MantineNavbar.Section>*/}

        {/* First section with normal height (depends on section content) */}
        <MantineNavbar.Section>First section</MantineNavbar.Section>

        {/* Grow section will take all available space that is not taken by first and last sections */}
        <MantineNavbar.Section grow>Grow section</MantineNavbar.Section>

        {/* Last section with normal height (depends on section content) */}
        <MantineNavbar.Section>Last section</MantineNavbar.Section>
      </MantineNavbar>
    </React.Fragment>
  );
};

const getNavItem = (item: ItemProps): React.ReactNode => {
  switch (item.type) {
    default:
    case ItemType.LinkItem:
      if (item?.linkItem == null) {
        console.log("No item for item type");
        break;
      }
      return <LinkItem {...item.linkItem} />;
  }
};
