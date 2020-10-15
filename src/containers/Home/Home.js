import React, { useState } from "react";
import Nav from "../../components/UI/Nav/Nav";
import Jumbotron from "../../components/Home/Jumbotron/Jumbotron";
import Runway from "../../components/Home/Runway/Runway";
import "./Home.scss";

const Home = () => {
  let [productData, setProductData] = useState(null);
  return (
    <div>
      <Jumbotron />
      <Nav />
      <Runway />
    </div>
  );
};

export default Home;
