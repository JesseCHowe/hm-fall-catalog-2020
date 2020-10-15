import React from "react";
import "./Jumbotron.scss";

const Jumbotron = () => {
  return (
    <div id="jumbotron">
      <video autoPlay muted loop>
        <source
          src={require("../../../assets/video/party.mp4")}
          type="video/mp4"
        />
      </video>
      <div className="cover">
        <div className="container">
          <div className="header-text">
            <img
              className="logo"
              src="https://cdn.freebiesupply.com/logos/large/2x/h-m-logo-black-and-white.png"
              alt="logo"
            />
            <span className="year">2020</span>
            <h1>Fall Vibes</h1>
            <p>
              As the leaves begin to change, it's time to warm up our wardrobes.
              Get ready for a return of cozy knitwear, denim, pants,
              long-sleeved tops and sweater dresses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
