import React from "react";
import {Outlet, useLoaderData} from "react-router-dom";
import {AppShell, Box, createStyles} from "@mantine/core";
import { PortfolioLoaderProps } from "./module";
import {HeaderMiddle} from "./components";
import {Thatsme} from "./thatsme";
import {Resume} from "./resume";
import {ScrollToAnchor} from "../../common/ScrollToAnchor";

export * from "./resume";
export * from "./thatsme";
export * from "./module";



const useStyles = createStyles((theme) => ({
  base: {
    minHeight: "calc(100vh - (var(--mantine-header-height, 0px)));",
    padding: "2rem",
  },
}));

export const Portfolio: React.FC = (props) => {
  const data = useLoaderData() as PortfolioLoaderProps;
  const { classes, cx } = useStyles();

  return (
    <React.Fragment>
      <AppShell
        header={<HeaderMiddle links={data.navigation}/>}
        padding={0}>
        <ScrollToAnchor />
        <Box className={cx(classes.base)} id={"home"}>
          <>Welcome in Portfolio</>
          <Outlet />
        </Box>
        <Box className={cx(classes.base)} id={"me"}>
          <Thatsme />
        </Box>
        <Box className={cx(classes.base)} id={"resume"}>
          <Resume />
        </Box>
      </AppShell>
    </React.Fragment>
  );
};
