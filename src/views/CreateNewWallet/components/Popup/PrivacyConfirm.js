import React, { useState } from "react";
import CustomButton from "../CustomButton";

const contents = [
  "Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility.",
  "Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong password.",
  "To keep your backup file safe, you should also keep secret your back up location and secure it.",
];

export default function PrivacyConfirm() {
  const [privacyMark, setPrivacyMark] = useState([false, false, false]);
  const isAllPrivacy = privacyMark.reduce((prev, cur) => cur && prev, true);

  const handleCheckPrivacy = (index) => {
    const clonePrivacyMark = [...privacyMark];
    clonePrivacyMark[index] = !clonePrivacyMark[index];
    setPrivacyMark(clonePrivacyMark);
  };

  return (
    <div className="privacy">
      <img className="privacy__saved" src="./success.svg" alt=""></img>
      <div className="privacy__title">Your wallet has been created!</div>
      <div className="privacy__main">
        {contents.map((c, index) => (
          <div className="privacy__main__line">
            <div
              className={`privacy__main-check ${
                privacyMark[index] && "privacy__main-checked"
              }`}
              onClick={() => handleCheckPrivacy(index)}
            ></div>
            <div className="privacy__main-content">{c}</div>
          </div>
        ))}
      </div>
      <CustomButton disabled={!isAllPrivacy} title="I UNDERSTAND" />
    </div>
  );
}
