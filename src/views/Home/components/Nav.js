import React, { useState } from "react";

export default function Nav({ navItem }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="nav">
      {navItem.map((n, index) => (
        <div
          className={`nav-item ${activeTab === index && "active"}`}
          onClick={() => setActiveTab(index)}
        >
          {n}
        </div>
      ))}
    </div>
  );
}
