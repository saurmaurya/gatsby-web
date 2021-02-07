import {
  AppBar,
  Button,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import React from "react";
import Link from "./Link";
import { makeStyles } from "@material-ui/core";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const navLinks = [
  {
    title: `home`,
    path: `/`,
  },
  {
    title: `about`,
    path: `/about`,
  },
  {
    title: `contact`,
    path: `/contact`,
  },
];

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
          {/* Add code */}
          <Button
            size="large"
            varient="contained"
            color="inherit"
            startIcon={<Home />}
          >
            SRSDEV.TECH
          </Button>
          {/* Add code end */}
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <ListItem>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
