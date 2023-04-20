import React from "react";
import { createStyles, Navbar as MantineNavbar } from "@mantine/core";
import { ItemProps, ItemType, NavbarProps } from "./module";
import { LinkItem } from "./link";

export * from "./module";
export * from "./link";

const useStyles = createStyles((theme) => ({
  navbar: {
    margin: `${theme.spacing.md} 0`,
  },
}));

export const Navbar: React.FC<NavbarProps> = ({ opened, items }) => {
  const { classes } = useStyles();

  const navbar = items.map((navItem) => {
    return getNavItem(navItem);
  });

  return (
    <React.Fragment>
      <MantineNavbar
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 100, lg: 200 }}
      >
        <MantineNavbar.Section className={classes.navbar} grow>
          {navbar}
        </MantineNavbar.Section>

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
