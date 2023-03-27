import { rem, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";
import { LinkItemProps } from "./module";

export * from "./module";

const useStyles = createStyles((theme) => ({
  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: rem(31),
    marginLeft: rem(30),
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  grouped: {
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export const LinkItem: React.FC<LinkItemProps> = ({
  title,
  // breadcrumbs,
  // caption,
  // icon,
  // onClick,
  to,
  // target,
}) => {
  const { classes, theme } = useStyles();

  return (
    // <Link style={{ margin: "24px" }} to={to}>
    <Link className={classes.link} to={to}>
      {title}
    </Link>
  );
};
