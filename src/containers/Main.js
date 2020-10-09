import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";
import Men from "./Men";
import Women from "./Women";
import ProductInfo from "./ProductInfo";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/men" component={Men} />
        <Route path='/product/:productId' component={ProductInfo}/>
        <Route path="/women" component={Women} />
      </Switch>
    </div>
  );
};

export default Main;
