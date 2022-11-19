import React, { useEffect } from "react";

export default function SavedClipboard({ setIsShow }) {
  console.log("setIsShow", setIsShow);
  useEffect(() => {
    console.log("heresdf");
    const idInterval = setInterval(() => {
      setIsShow(false);
    }, 2000);

    return () => clearInterval(idInterval);
  }, []);
  return (
    <div className="save-clipboard">
      <img className="save-clipboard__saved" src="./saved.svg" alt=""></img>
      <div className="save-clipboard__title">Saved to clipboard</div>
      <div className="save-clipboard__countdown">2s</div>
    </div>
  );
}
