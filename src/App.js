import React from "react";
import "./App.css";
import Home from "./containers/Home/Home";
import Cart from "./containers/Cart/Cart";
import FallEssentials from "./containers/FallEssentials/FallEssentials";
import KnitFactor from "./containers/KnitFactor/KnitFactor";
import TheCompleteCoat from "./containers/TheCompleteCoat/TheCompleteCoat";
import ProductInfo from "./containers/ProductInfo/ProductInfo";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/fallessentials" component={FallEssentials} />
        <Route path="/product/:productId" component={ProductInfo} />
        <Route path="/knit" component={KnitFactor} />
        <Route path="/the-complete-coat" component={TheCompleteCoat} />
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
