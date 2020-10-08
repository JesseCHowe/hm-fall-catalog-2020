import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";
import Men from "./Men";
import Women from "./Women";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
