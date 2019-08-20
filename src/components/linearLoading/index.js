import React from "react";

import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = props => ({
  root: {
    flexGrow: 1
  },
  colorPrimary: {
    backgroundColor: "#FDDD98"
  },
  barColorPrimary: {
    backgroundColor: "#FFBE33"
  }
});

const LinearLoading = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <LinearProgress
        classes={{
          colorPrimary: classes.colorPrimary,
          barColorPrimary: classes.barColorPrimary
        }}
      />
    </div>
  );
};

export default withStyles(styles)(LinearLoading);
