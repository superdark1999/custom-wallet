import React from "react";

export default function Transaction({ transactions }) {
  return (
    <div className="transaction">
      {transactions.map((t) => {
        return (
          <div className="transaction__item">
            <img className="transaction__item-avt" src={t.avt} alt="" />

            <div className="transaction__item-content">
              <div className="name">{t.name}</div>
              <div className="online-time">{t.lastOnlineTime} hours ago</div>
            </div>
            <div
              className="transaction__item-balance"
              style={{ color: t.isPlus ? "#04B800" : "#FF0366" }}
            >
              {t.isPlus ? "+" : "-"}
              {t.balance} {t.symbol}
            </div>
          </div>
        );
      })}
    </div>
  );
}
