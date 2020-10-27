import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="social-links">
          <a href="https://www.facebook.com/hmtheus">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com/hmusa">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/hm/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/user/hennesandmauritz">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.pinterest.com/hm/">
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
        </div>
        <div className="hm-logo">
          <span>Hennes</span>
          <img src={require("../../assets/images/logo.png")} alt="h&m logo"/>
          <span>Mauritz</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
