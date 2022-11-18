import React, { useState } from "react";

export default function NotificationPopup({ children, isShow, setIsShow }) {
  return (
    <div className="popup" style={{ display: isShow ? "flex" : "none" }}>
      <img
        className="popup__down"
        src="./down.svg"
        alt=""
        onClick={() => setIsShow(false)}
      ></img>
      {children}
    </div>
  );
}
