import React from "react";

import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = props => ({
  root: {
    flexGrow: 1
  }
});

const Loading = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
};

export default withStyles(styles)(Loading);
