import React from "react";
import profilepic from "../images/profilepic.jpeg";
import mailicon from "../images/emailicon.png";
import linkdinicon from "../images/linkedinicon.svg";
import "../blocks/Info.css";

export default function Info() {
  return (
    <div className="info__container">
      <img className="profile__image" src={profilepic}></img>
      <h1 className="profile__name">Alan Shieh</h1>
      <h3 className="job__title">Frontend Developer</h3>
      <h4 className="portfolio__link">alanshieh.dev</h4>
      <div className="buttons__container">
        <button className="email__button" type="button">
          <img className="email__icon" src={mailicon}></img>
          <p className="email__button-text">Email</p>
        </button>
        <button className="linkedin__button" type="button">
          <img className="linkedin__icon" src={linkdinicon}></img>
          <p className="linkedin__button-text">LinkedIn</p>
        </button>
      </div>
    </div>
  );
}
