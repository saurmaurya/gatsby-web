import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
}));

const SideDrawer = ({ navLinks }, props) => {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  console.log(navLinks);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sideDrawerLinks = (
    <div>
      <div className={classes.list} />
      <Divider />
      <List component="nav">
        {navLinks.map(({ path, title }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button key={title}>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        aria-label="menu"
        edge="start"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        container={container}
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {sideDrawerLinks}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default SideDrawer;
