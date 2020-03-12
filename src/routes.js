import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "components/Home";

export default function routes() {
  const links = {
    path: '/', page: Home
  }

  return(
    <Switch>
      {links.map(link => (
        <Route path={link.path}>
          {link.page.Component}
        </Route>
      ))}
    </Switch>
  );
}
