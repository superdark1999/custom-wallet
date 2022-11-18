import React, { useMemo, useState } from "react";

import styled from "styled-components";
import BasePopup from "./components/Popup/BasePopup";
import SavedClipboard from "./components/Popup/SavedClipboard";
import PrivacyConfirm from "./components/Popup/PrivacyConfirm";
import CreateSeed from "./components/CreateSeed";
import ConfirmSeed from "./components/ConfirmSeed";

export default function CreateNewWallet() {
  const [isShow, setIsShow] = useState(true);
  const [step, setStep] = useState(0);
  const Components = useMemo(() => [CreateSeed, ConfirmSeed], []);
  const RenderComponent = Components[step === 0 ? 0 : 1];

  const handleChangeStep = () => {
    if (step <= 5) setStep((prev) => prev + 1);
  };

  const handleShowPopup = () => {};

  return (
    <CreateNewWalletStyle>
      <div className="back">
        <img src="./back.png" alt="" />
        Create New Wallet
      </div>

      <RenderComponent setIsShow={setIsShow} step={step} />

      <div className="confirm">
        <div className="confirm-title">
          How does this work
          <img src="./back.png" alt="" />
        </div>
        <div className="confirm-btn" onClick={handleChangeStep}>
          Next
        </div>
      </div>

      <BasePopup isShow={isShow} setIsShow={setIsShow}>
        <PrivacyConfirm />
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
