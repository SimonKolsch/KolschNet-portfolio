import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconPlaceholder } from '@tabler/icons-react';
import {ApiLinkProps, LinkItem} from "../navbar";
import {Location, To, useLocation} from "react-router-dom";

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: rem(300),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  }
}));

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
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState((isLinkAndLocationMatching(location, links)));
  const { classes } = useStyles();

  const items = links.map((link) => (
      <LinkItem key={link.id} id={link.id} title={link.title} to={link.to} active={active} setActive={setActive}/>
  ));

  return (
      <Header height={56}>
        <Container className={classes.inner}>
          <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>

          <IconPlaceholder size={28} />

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandTwitter size="1.1rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandYoutube size="1.1rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size="1.1rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </Header>
  );
}