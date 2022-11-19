import React, { useMemo, useState } from "react";

import styled from "styled-components";
import BasePopup from "./components/Popup/BasePopup";
import SavedClipboard from "./components/Popup/SavedClipboard";
import PrivacyConfirm from "./components/Popup/PrivacyConfirm";
import CreateSeed from "./components/CreateSeed";
import ConfirmSeed from "./components/ConfirmSeed";
import CustomButton from "./components/CustomButton";
import words from "../../words.json";

import { MAX_STEP } from "../../constants";

export const getRandomWord = (length) => {
  let arr = [];
  while (arr.length < length) {
    let r = Math.floor(Math.random() * words.length) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr.map((a) => words[a]);
};

export default function CreateNewWallet() {
  const [isShow, setIsShow] = useState(false);
  const [step, setStep] = useState(0);
  const [isCanPassNextStep, setIsCanPassNextStep] = useState(true);
  console.log("isCanPassNextStep: ", isCanPassNextStep);
  const MainComponents = useMemo(() => [CreateSeed, ConfirmSeed], []);
  const PopupComponents = useMemo(() => [SavedClipboard, PrivacyConfirm], []);
  const MainRenderComponent = MainComponents[step === 0 ? 0 : 1];
  const PopupRenderComponent = PopupComponents[step === 0 ? 0 : 1];
  const generatedWord = useMemo(() => getRandomWord(24), []);

  const mainProps = useMemo(
    () => [
      { setIsShow, generatedWord },
      {
        setIsShow,
        setIsCanPassNextStep,
        step,
        generatedWord: generatedWord.slice((step - 1) * 6, (step - 1) * 6 + 6),
      },
    ],
    [step]
  );

  const renderMainProps = mainProps[step === 0 ? 0 : 1];

  const handleChangeStep = () => {
    if (!isCanPassNextStep) return;
    if (step === MAX_STEP) setIsShow(true);
    if (step <= MAX_STEP - 1) setStep((prev) => prev + 1);
  };

  return (
    <CreateNewWalletStyle>
      <div className="back" onClick={() => setStep((prev) => prev - 1)}>
        <img src="./back.png" alt="" />
        Create New Wallet
      </div>

      <MainRenderComponent {...renderMainProps} />

      <div className="confirm">
        <div className="confirm-title">
          How does this work
          <img src="./back.png" alt="" />
        </div>
        <CustomButton
          disabled={!isCanPassNextStep}
          title="Next"
          onClick={handleChangeStep}
        />
      </div>

      <BasePopup isShow={isShow} setIsShow={setIsShow}>
        <PopupRenderComponent setIsShow={setIsShow} />
      </BasePopup>
    </CreateNewWalletStyle>
  );
}

const CreateNewWalletStyle = styled.div`
  .back {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 17px;
    line-height: 23px;
  }

  .confirm {
    position: absolute;
    width: 100%;
    padding: 2rem 1rem;
    left: 0rem;
    bottom: 0;
    background: #ffffff;
    box-shadow: 0px -7px 64px rgba(0, 0, 0, 0.07);

    &-title {
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;

      font-weight: 500;
      font-size: 17px;
      line-height: 23px;
      /* identical to box height */

      display: flex;
      align-items: center;

      /* Color/Neutral/1 */

      color: #04004d;

      img {
        rotate: 180deg;
      }
    }
    &-btn {
    }
  }

  .popup {
    position: absolute;
    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: white;
    padding: 1rem;

    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5);

    left: 0;
    bottom: 0;
    border-radius: 16px 16px 0px 0px;

    &__down {
      margin: 1rem 0;
    }
  }

  .save-clipboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__saved {
      margin: 1rem;
    }

    &__title {
      color: #04004d;
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
    }

    &__countdown {
      color: #ff0366;
      font-weight: 400;
      font-size: 15px;
      line-height: 21px;
      margin: 1rem;
    }
  }

  .privacy {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__saved {
      margin: 1rem;
    }

    &__title {
      color: #04004d;
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
    }

    &__main {
      margin: 2rem 0;
      &-check {
        border-radius: 50%;
        border: 1px solid #bbcffb;
        width: 24px;
        height: 24px;
        margin-right: 1rem;
      }
      &-checked {
        border: none;
        background: url("./active.svg");
      }
      &-content {
        color: #667386;
        width: 295px;
      }

      &__line {
        display: flex;
      }
    }
  }
`;
