import {rem, createStyles, Tooltip, MantineTheme} from "@mantine/core";
import {Link} from "react-router-dom";
import {LinkItemProps} from "./module";
import React from "react";

const useStyles = createStyles((theme: MantineTheme) => ({
  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({variant: 'light', color: theme.primaryColor}).background,
      color: theme.fn.variant({variant: 'light', color: theme.primaryColor}).color,
    },
  },

  grouped: {
    borderLeft: `${rem(1)} solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    marginLeft: rem(30),
  },
}));

export const LinkItem: React.FC<LinkItemProps> = ({
    id,
    title,
    to,
    tooltip,
    setActive,
    active,
  }) => {

  const {classes, cx} = useStyles();

  const link = (
      <Link className={cx(classes.link, {[classes.linkActive]: active === id})} to={to}
            onClick={() => {
              setActive(id);
            }}>
        {title}
      </Link>
  );

  return (
      <>
        {tooltip != undefined ? (
            <Tooltip label={tooltip} position={"right"}>
              {link}
            </Tooltip>
        ) : (
            link
        )}
      </>
  );
};
