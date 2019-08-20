import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import MainPage from "./pages/main";
import Second from "./pages/second";

// eslint-disable-next-line react/prop-types
export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={MainPage} props={childProps} />
    <AppliedRoute path="/1" exact component={Second} props={childProps} />
  </Switch>
);
