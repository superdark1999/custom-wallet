import React from "react";

export default function AutoGenSeed({ words }) {
  return (
    <div className="auto-seed">
      {words.map((w, index) => {
        return (
          <div className="auto-seed__cell">
            <div className="auto-seed__cell-index">{index + 1}</div>
            <div className="auto-seed__cell-word">{w}</div>
          </div>
        );
      })}
    </div>
  );
}
