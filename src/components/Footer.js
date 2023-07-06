import React from "react";
import "../blocks/Footer.css";
import facebookicon from "../images/Facebookicon.svg";
import instagramicon from "../images/Instagramicon.svg";
import githubicon from "../images/GitHubicon.svg";

export default function Footer() {
  return (
    <div className="footer__container">
      <button className="facebook__button">
        <img className="facebook__icon" src={facebookicon}></img>
      </button>
      <button className="instagram__button">
        <img className="instagram__icon" src={instagramicon}></img>
      </button>
      <button className="github__button">
        <img className="github__icon" src={githubicon}></img>
      </button>
    </div>
  );
}
