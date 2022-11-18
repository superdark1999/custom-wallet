import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="profile" alt="sdfds">
        <img className="profile__avt" src="./avt1.png" alt="" />
        <div className="profile__info">
          <div className="profile__info-name">Minh Nguyen</div>
          <div className="profile__info-tag">@Meta</div>
        </div>
      </div>
      <div className="utils">
        <div className="utils__item">
          <img src="./select1.svg" alt="" />
        </div>
        <div className="utils__item">
          <img src="./select2.svg" alt="" />
        </div>
        <div className="utils__item">
          <img src="./bell.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
