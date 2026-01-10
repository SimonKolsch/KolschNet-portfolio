import {Tooltip} from "@mantine/core";
import {Link} from "react-router-dom";
import {LinkItemProps} from "./module";
import React from "react";
import classes from "./link.module.css";

export const LinkItem: React.FC<LinkItemProps> = ({
    id,
    title,
    to,
    tooltip,
    setActive,
    active,
  }) => {

  const link = (
      <Link className={`${classes.link} ${active === id ? classes.linkActive : '' }`} to={to}
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
