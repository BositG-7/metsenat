import { Link } from "react-router-dom";
import {
  Burger,
  Button,
  // Container,
  createStyles,
  Group,
  Header,
  Paper,
  rem,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoEnter } from "react-icons/io5";

import Logo from "components/logo";

const HEADER_HEIGHT = rem(100);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    marginBottom: 0,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0px 200px",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  borderColor: {
    borderColor: "3px solid",
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).color,
    },
  },
}));

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const links = [
    { link: "/", label: "Asosiy" },
    { link: "/", label: "Grantlar" },
    { link: "/", label: "Soliq imtiyozlari" },
    {
      link: "/auth/login",
      label: "Kirish",
      isIcon: true,
    },
    {
      link: "/auth/register",
      label: "Ro'yatdan o'tish",
      isButton: true,
    },
  ];

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <div className={classes.header}>
        <Logo />
        <Group spacing={5} className={classes.links}>
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.link}
              className={cx(classes.link, {
                [classes.linkActive]: window.location.pathname === link.link,
              })}
              onClick={close}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {link.isIcon ? <IoEnter style={{ marginRight: "4px" }} /> : null}
                {link.isButton ? <Button variant="outline">{link.label}</Button> : link.label}
              </div>
            </Link>
          ))}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.link}
                  className={cx(classes.link, {
                    [classes.linkActive]: window.location.pathname === link.link,
                  })}
                  onClick={close}
                >
                  {link.label}
                </Link>
              ))}
            </Paper>
          )}
        </Transition>
      </div>
    </Header>
  );
};

export default Navbar;
