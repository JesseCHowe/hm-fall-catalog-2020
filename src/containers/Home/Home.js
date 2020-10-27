import React from "react";
import Nav from "../../components/UI/Nav/Nav";
import Jumbotron from "../../components/Home/Jumbotron/Jumbotron";
import Runway from "../../components/Home/Runway/Runway";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <Nav />
      <Runway />
    </div>
  );
};

export default Home;
