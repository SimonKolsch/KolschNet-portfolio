import { rem, createStyles, Tooltip, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { LinkItemProps } from "./module";

export * from "./module";

const useStyles = createStyles((theme) => ({
  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    textAlign: "center",
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
    marginLeft: rem(30),
  },
}));

export const LinkItem: React.FC<LinkItemProps> = ({
  title,
  to,
  tooltip,
  // breadcrumbs,
  // icon,
  // onClick,
  // target,
}) => {
  const { classes } = useStyles();

  const link = (
    // <Link style={{ margin: "24px" }} to={to}>
    <Link className={classes.link} to={to}>
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
