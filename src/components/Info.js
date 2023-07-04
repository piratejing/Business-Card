import React from "react";
import profilepic from "../images/profilepic.jpeg";
import "../blocks/Info.css";

export default function Info() {
  return (
    <div className="info__container">
      <img className="profile__image" src={profilepic}></img>
      <h1 className="profile__name">Alan Shieh</h1>
      <h3 className="job__title">Frontend Developer</h3>
      <h4 className="portfolio__link">alanshieh.dev</h4>
      <button className="email__button">Email</button>
      <button className="linkedin__button">LinkedIn</button>
    </div>
  );
}
