import React from "react";
import {useLoaderData} from "react-router-dom";
import {AppShell, Box} from "@mantine/core";
import { PortfolioLoaderProps } from "./module";
import {HeaderMiddle} from "./components";
import {Thatsme} from "./thatsme";
import {Resume} from "./resume";
import {ScrollToAnchor} from "../../common/ScrollToAnchor";
import {Home} from "./home";
import classes from './portfolio.module.css';

export * from "./resume";
export * from "./thatsme";
export * from "./module";

export const Portfolio: React.FC = (props) => {
  const data = useLoaderData() as PortfolioLoaderProps;

  return (
      <AppShell
          header={{height: 70}}
          padding={0}>
        <HeaderMiddle links={data.navigation}/>
        <ScrollToAnchor/>
        {/*<Box className={cx(classes.base)} id={"home"}>
          <Home />
        </Box>*/}
        <Box className={`${classes.base} ${classes.mid}`} id={"me"}>
          <Thatsme/>
        </Box>
        {/* <Box className={cx(classes.base)} id={"resume"}>
          <Resume />
        </Box>*/}
      </AppShell>
  );
};
