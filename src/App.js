import React from "react";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { ToolbarContext } from "./contexts/toolbarContext";
import { LoadingBarProvider } from "./contexts/loadingBarContext";
import Header from "./components/header";
import Routes from "./Routes";
import "./App.css";
import SideBar from "./components/sideBar";

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

const App = props => {
  const classes = useStyles();
  const childProps = {};

  return (
    <div className="App">
      <ToolbarContext.Provider>
        <LoadingBarProvider>
          <div className={classes.root}>
            <CssBaseline />
            <Header />
            <SideBar />
            <Routes childProps={childProps} />
          </div>
        </LoadingBarProvider>
      </ToolbarContext.Provider>
    </div>
  );
};

export default withRouter(App);
