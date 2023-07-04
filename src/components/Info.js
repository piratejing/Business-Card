import React from "react";
import profilepic from "../images/profilepic.jpeg";
import "../blocks/Info.css";

export default function Info() {
  return (
    <div className="info__container">
      <img className="profile__image" src={profilepic}></img>
      <h1 className="profile__name"></h1>
      <h3 className="job__title"></h3>
      <button className="email__button"></button>
      <button className="linkedin__button"></button>
    </div>
  );
}
