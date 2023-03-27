import React from "react";
import {
  Burger,
  MediaQuery,
  Text,
  Header as MantineHeader,
  Avatar,
} from "@mantine/core";
import { HeaderProps } from "./module";

export const Header: React.FC<HeaderProps> = ({ opened, setOpened }) => {
  return (
    <React.Fragment>
      <MantineHeader height={{ base: 50, md: 70 }} p="md">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened(!opened)}
              size="sm"
              mr="xl"
            />
          </MediaQuery>
          <Text>Kolsch Net</Text>
          {/*TODO: move out here - separate file for UserInteraction*/}
          <Avatar radius="xl" />
        </div>
      </MantineHeader>
    </React.Fragment>
  );
};
