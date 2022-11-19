import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { MAX_STEP } from "../../../constants";

import { getRandomWord } from "..";

const CHECK_WORD_PER_PAGE = 6;
const WORD_PER_ROW = 3;

const getRandomPositionResult = (length) => {
  let arr = [];
  while (arr.length < length) {
    arr.push(Math.floor(Math.random() * 3));
  }
  return arr;
};

export default function ConfirmSeed({
  step,
  generatedWord,
  setIsCanPassNextStep,
}) {
  const [answers, setAnswers] = useState([
    ...Array(CHECK_WORD_PER_PAGE)
      .fill(0)
      .map((_) => {
        return {
          isFill: false,
          isTrue: false,
          answer: null,
        };
      }),
  ]);
  const isFullFill = answers.reduce((prev, curr) => curr.isFill && prev, true);
  const isAnswerCorrect = answers.reduce(
    (prev, curr) => curr.isTrue && prev,
    true
  );
  const isError = isFullFill && !isAnswerCorrect;
  const randomPositionResult = useMemo(() => {
    return getRandomPositionResult(CHECK_WORD_PER_PAGE);
  }, [step]);

  const dummyWords = useMemo(() => {
    const tempArray = getRandomWord(12);
    const chunkSize = 2;
    return Array(CHECK_WORD_PER_PAGE)
      .fill(0)
      .map((value, index) => {
        const row = tempArray.slice(index * chunkSize, (index + 1) * chunkSize);
        row.splice(randomPositionResult[index], 0, generatedWord[index]);

        return row;
      });
  }, [step]);

  useEffect(() => {
    setAnswers([
      ...Array(CHECK_WORD_PER_PAGE)
        .fill(0)
        .map((_) => {
          return {
            isFill: false,
            isTrue: false,
            answer: null,
          };
        }),
    ]);
  }, [step]);

  useEffect(() => {
    if (isFullFill && isAnswerCorrect) setIsCanPassNextStep(true);
    else setIsCanPassNextStep(false);
  });

  const handleChooseWord = (index, answer) => {
    const cloneAnswers = [...answers];
    cloneAnswers[index].isFill = true;
    cloneAnswers[index].answer = answer;
    if (answer === randomPositionResult[index])
      cloneAnswers[index].isTrue = true;
    else cloneAnswers[index].isTrue = false;

    setAnswers(cloneAnswers);
  };

  return (
    <ConfirmSeedStyle>
      <div className="title">
        <span>Confirm your seed phrase</span>
        <div className="title__step">
          {step}/{MAX_STEP}
        </div>
      </div>
      <div className="content">
        {dummyWords.map((row, index) => (
          <div className="content__row">
            <div className="content__row-item content__row-index">
              {index + 1}
            </div>
            {row.map((word, rowIndex) => (
              <div
                className={`content__row-item ${
                  answers[index].answer === rowIndex && "content__row-active"
                }`}
                onClick={() => handleChooseWord(index, rowIndex)}
              >
                {word}
              </div>
            ))}
          </div>
        ))}
      </div>
      {isError && (
        <div className="warning">
          <img src="../warning.svg" alt=""></img>
          Wrong seed phrases. Please try again!
        </div>
      )}
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
      grid-template-columns: 0.5fr repeat(3, 1fr);
      grid-column-gap: 1rem;
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid #d3d7db;
      border-radius: 6px;

      &-item {
        display: grid;
        place-items: center;
        padding: 0 0.2rem;
      }

      &-active {
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
