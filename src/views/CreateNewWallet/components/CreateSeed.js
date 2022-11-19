import React from "react";
import styled from "styled-components";
import AutoGenSeed from "./AutoGenSeed";

export default function CreateSeed({ setIsShow, generatedWord }) {
  const handleSaveToClipboard = () => {
    setIsShow(true);
    navigator.clipboard.writeText(generatedWord);
  };
  return (
    <CreateSeedStyle>
      <div className="title">Auto Gen Seed Phrase?</div>
      <AutoGenSeed words={generatedWord} />
      <div className="clipboard">
        <span>
          Tap to Copy or Carefully write down your seed phrase and store it in a
          safe place
        </span>
        <img src="./clipboard.svg" alt="" onClick={handleSaveToClipboard} />
      </div>
    </CreateSeedStyle>
  );
}

const CreateSeedStyle = styled.div`
  .title {
    color: #004dff;

    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 23px;

    margin: 2rem 0;
  }

  .auto-seed {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0.7rem;
    grid-row-gap: 1rem;
    &__cell {
      display: flex;
      background: #ffffff;
      box-shadow: 0px 7px 32px rgba(0, 0, 0, 0.07);
      border-radius: 6px;
      padding: 0.3rem;

      &-index {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: #bbcffb;
        margin-right: 0.5rem;

        color: #004dff;
        font-size: 11px;
        line-height: 13px;
      }

      &-word {
        color: #04004d;
        font-weight: 400;
        font-size: 15px;
        line-height: 21px;
      }
    }
  }

  .clipboard {
    display: flex;
    margin: 2rem 0;
  }
`;
