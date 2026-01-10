import React from "react";
import {Box} from "@mantine/core";
import classes from "./thatsme.module.css";

export const Thatsme: React.FC = (props) => {

  return (
    <React.Fragment>
      <Box className={classes.wrapper}>
        <Box>
          Bild
        </Box>
        <Box>
          Thats Me!
        </Box>
      </Box>
      <Box>
        Swipe
      </Box>
    </React.Fragment>
  );
};
