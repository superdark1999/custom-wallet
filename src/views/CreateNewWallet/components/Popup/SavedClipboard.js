import React from "react";

export default function SavedClipboard() {
  return (
    <div className="save-clipboard">
      <img className="save-clipboard__saved" src="./saved.svg" alt=""></img>
      <div className="save-clipboard__title">Saved to clipboard</div>
      <div className="save-clipboard__countdown">2s</div>
    </div>
  );
}
