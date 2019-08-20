import React from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import ContextMenu from "../contextMenu";
import { useContextMenu } from "../../contexts/contextMenuContext";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { useLoadingBar } from "../../contexts/loadingBarContext";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
const SideBar = props => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const loading = useLoadingBar();
  // const { loadingDispatch } = loading;
  const contextMenu = useContextMenu();

  const { contextMenuDispatch, contextMenuId } = contextMenu;
  debugger;

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const pages = [
    {
      name: "Dashboard",
      href: "/",
      id: 1,
      click: () => contextMenuDispatch("dashboard")
    },
    {
      name: "Usuarios",
      href: "/1",
      id: 2,
      click: () => contextMenuDispatch("users")
    },
    {
      name: "Configuracion",
      href: "/",
      id: 3,
      click: () => contextMenuDispatch("config")
    },
    {
      name: "Logout",
      href: "/1",
      id: 4,
      click: () => contextMenuDispatch("logout")
    }
  ];
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />

      <List>
        {pages.map((item, index) => {
          return (
            <ListItem
              button
              key={item.id}
              component={Link}
              to={item.href}
              onClick={item.click}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>

              <ListItemText primary={item.name} />
            </ListItem>
          );
        })}
      </List>
      <ContextMenu idContext={contextMenuId} />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideBar;
