import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Cart from "./containers/Cart";
import Men from "./containers/Men";
import Women from "./containers/Women";
import ProductInfo from "./containers/ProductInfo";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/men" component={Men} />
        <Route path="/product/:productId" component={ProductInfo} />
        <Route path="/women" component={Women} />
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
