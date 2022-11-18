import React, { useState } from "react";
import { addCommas } from "../../../utils";

export default function Wallet({ wallets }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="wallet">
      {wallets.map((w, index) => {
        return (
          <div
            className={`wallet__item ${activeTab === index && "active"}`}
            style={{ borderColor: activeTab === index && w.color }}
            onClick={() => setActiveTab(index)}
          >
            <div
              className="wallet__item-color"
              style={{ background: w.color }}
            ></div>
            <div className="wallet__item-name">{w.name}</div>
            <div className="wallet__item-balance">
              {addCommas(w.balance)} MCOIN
            </div>
          </div>
        );
      })}
    </div>
  );
}
