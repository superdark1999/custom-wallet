import React from "react";
import styled from "styled-components";

export default function ConfirmSeed({ setIsShow, step }) {
  return (
    <ConfirmSeedStyle>
      <div className="title">
        <span>Confirm your seed phrase</span>
        <div className="title__step">{step}/6</div>
      </div>
      <div className="content">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div className="content__row">
              <div className="content__row-item content__row-index">
                {index + 1}
              </div>
              <div className="content__row-item content__row-active">Word</div>
              <div className="content__row-item">Word</div>
              <div className="content__row-item">Word</div>
            </div>
          ))}
      </div>
      <div className="warning">
        <img src="../warning.svg"></img>
        Wrong seed phrases. Please try again!
      </div>
    </ConfirmSeedStyle>
  );
}

const ConfirmSeedStyle = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #004dff;

    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 23px;

    margin: 2rem 0;
    &__step {
      color: black;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 21px;
    }
  }

  .content {
    &__row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid #d3d7db;
      border-radius: 6px;

      &-item {
        width: 59px;
      }

      &-active {
        display: grid;
        place-items: center;
        background: #bbcffb;
        /* Drop Shadow 20 */

        box-shadow: 0px 7px 20px rgba(21, 79, 212, 0.1);
        border-radius: 6px;
      }

      &-index {
        display: grid;
        place-items: center;
        color: #004dff;
        border-radius: 50%;
        border: 1px solid #004dff;
        width: 24px;
      }
    }
  }

  .warning {
    color: #ff0366;
    img {
      margin-right: 1rem;
    }
  }
`;
