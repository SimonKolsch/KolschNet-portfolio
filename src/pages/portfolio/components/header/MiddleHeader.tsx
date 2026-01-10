import { useState } from 'react';
import { AppShellHeader, Group, Container, rem } from '@mantine/core';
import {ApiLinkProps, LinkItem} from "../navbar";
import {Location, To, useLocation} from "react-router-dom";
import classes from "./middleheader.module.css";

interface HeaderMiddleProps {
  links: ApiLinkProps[];
}

// @TODO could be better...
function isLinkAndLocationMatching(location: Location, links: ApiLinkProps[]) : string {
  if(location.hash) {
    const locationTo: To = {pathname: location.pathname, hash: location.hash};
    for (const link of links) {
      if (typeof link.to !== "string") {
        if (link.to.pathname === locationTo.pathname && link.to.hash === locationTo.hash) {
          return link.id;
        }
      }
    }
  }
  return links[0].id;
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const location = useLocation();
  const [active, setActive] = useState((isLinkAndLocationMatching(location, links)));

  const items = links.map((link) => (
      <LinkItem key={link.id} id={link.id} title={link.title} to={link.to} active={active} setActive={setActive}/>
  ));

  return (
      <AppShellHeader>
        <Container className={classes.inner}>
          <Group className={classes.links}>
            {items}
          </Group>
        </Container>
      </AppShellHeader>
  );
}