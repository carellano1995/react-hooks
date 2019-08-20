import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import LinearLoading from "../linearLoading";
import useOnlineStatus from "@rehooks/online-status";
import Loading from "../loading";
import { useLoadingBar } from "../../contexts/loadingBarContext";
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

const Header = props => {
  const onlineStatus = useOnlineStatus();
  const classes = useStyles();
  const loading = useLoadingBar();
  const { loadingStatus } = loading;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Carellano Admin
        </Typography>
      </Toolbar>
      {onlineStatus ? "" : <LinearLoading />}
      {loadingStatus.isActive ? <Loading /> : ""}
    </AppBar>
  );
};

export default Header;
