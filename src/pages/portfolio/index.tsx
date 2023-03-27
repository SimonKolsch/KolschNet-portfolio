import React, { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { AppShell } from "@mantine/core";
import { Header, Navbar } from "./components";
import { PortfolioLoaderProps } from "./module";

export * from "./resume";
export * from "./thatsme";
export * from "./module";

export const Portfolio: React.FC = (props) => {
  const [opened, setOpened] = useState(false);
  const data = useLoaderData() as PortfolioLoaderProps;
  return (
    <React.Fragment>
      <AppShell
        navbarOffsetBreakpoint="sm"
        navbar={<Navbar opened={opened} items={data.navigation} />}
        header={<Header opened={opened} setOpened={setOpened} />}
        padding="xl"
      >
        <Outlet />
      </AppShell>
    </React.Fragment>
  );
};
