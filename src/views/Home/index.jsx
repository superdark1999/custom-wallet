import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Wallet from "./components/Wallet";
import Transaction from "./components/Transaction";
import Dapp from "./components/Dapp";

export default function Home() {
  return (
    <HomeStyle>
      <Header />
      <Nav navItem={["My wallet", "Report", "Setting"]} />
      <Wallet
        wallets={[
          {
            color: "#0084F4",
            name: "@Meta Wallet",
            balance: 234234,
          },
          {
            color: "#FC9D00",
            name: "@Meta Wallet",
            balance: 2342342,
          },
          {
            color: "#04B800",
            name: "@Meta Wallet",
            balance: 23423423,
          },
        ]}
      />
      <Nav navItem={["Transaction", "Pending"]} />
      <Transaction
        transactions={[
          {
            avt: "./avt2.png",
            name: "Eric Hopper",
            lastOnlineTime: 3,
            balance: 13423,
            isPlus: false,
            symbol: "USDT",
          },
          {
            avt: "./avt2.png",
            name: "Melissa S Booker",
            lastOnlineTime: 3,
            balance: 13423,
            isPlus: true,
            symbol: "USDT",
          },
          {
            avt: "./avt2.png",
            name: "Andy Lau",
            lastOnlineTime: 3,
            balance: 13423,
            isPlus: false,
            symbol: "USDT",
          },
          {
            avt: "./avt2.png",
            name: "Eric Hopper",
            lastOnlineTime: 3,
            balance: 13423,
            isPlus: false,
            symbol: "USDT",
          },
        ]}
      />

      <Dapp
        dapps={[
          {
            name: "Dapp asdfd",
          },
          {
            name: "Dapp asdfd asdfd asdf",
          },
          {
            name: "Dapp asdfd",
          },
          {
            name: "Dapp asdfd",
          },
          {
            name: "Dapp asdfd",
          },
          {
            name: "Dapp asdfd",
          },
          {
            name: "Dapp asdfd Dapp asdfd",
          },
          {
            name: "Dapp asdfd",
          },
          {
            name: "Dapp asdfd",
          },
          {
            name: "Dapp asdfd",
          },
        ]}
      />
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  .header {
    display: flex;
    justify-content: space-between;

    .profile {
      display: flex;
      &__avt {
        border-radius: 50%;
        margin-right: 0.5rem;
      }

      &__info {
        &-tag {
          color: var(--gray);
          font-weight: 400;
          font-size: 13px;
          line-height: 18px;
        }

        &-name {
          font-family: "Clear Sans Medium";

          color: var(--blue);
          font-weight: 500;
          font-size: 17px;
          line-height: 23px;
        }
      }
    }

    .utils {
      display: flex;
      &__item {
        display: grid;
        place-items: center;
        width: 2.4rem;
        height: 2.4rem;

        box-shadow: 0px 10px 20px rgba(41, 39, 77, 0.1);
        backdrop-filter: blur(11px);
        background: rgba(255, 255, 255, 0.4);

        border-radius: 15px;
      }
    }
  }

  .nav {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    margin: 1rem 0;
    cursor: pointer;

    &-item {
      color: #d3d7db;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 23px;
    }

    .active {
      color: var(--blue);

      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: -30%;
        left: 50%;
        transform: translateX(-50%);

        width: 32px;
        height: 3px;
        background: #004dff;
        border-radius: 2px;
      }
    }
  }

  .wallet {
    display: flex;
    gap: 1rem;
    overflow-y: visible;
    width: fit-content;

    .active {
      border: 1px solid #004dff;
    }

    &__item {
      padding: 1rem;

      background: linear-gradient(
        137.08deg,
        rgba(255, 255, 255, 0.6) 4.85%,
        rgba(255, 255, 255, 0.780737) 34.75%,
        #ffffff 93.98%
      );
      box-shadow: 0px 10px 20px rgba(85, 76, 255, 0.2);
      backdrop-filter: blur(30px);
      border-radius: 22px;
      z-index: 3;

      &:before {
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;

        /* Color/Semantic/Blue 1 */

        background: #0084f4;
        border-radius: 15px;
      }

      &-color {
        width: 2.5rem;
        height: 2.5rem;
        margin-bottom: 1rem;

        border-radius: 15px;
      }

      &-name {
        color: var(--gray);
      }

      &-balance {
        color: var(--blue);
        font-weight: 700;
        font-size: 15px;
        line-height: 21px;
        white-space: nowrap;
      }
    }
  }

  .transaction {
    &__item {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      &-avt {
        margin-right: 1rem;
        border-radius: 12px;
      }

      &-content {
        flex-grow: 1;
        .name {
          font-weight: 500;
          font-size: 17px;
          line-height: 23px;
        }

        .online-time {
          color: var(--gray);
        }
      }

      &-balance {
        font-weight: 700;
        font-size: 16px;
        line-height: 32px;
      }
    }
  }

  .dapp {
    width: 100vw;
    position: absolute;
    bottom: 0%;
    right: 0;
    background: #554cff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* min-height: 185px; */

    padding: 2rem 0.7rem;
    /* border-top-left-radius: 15%;
    border-top-right-radius: 15%; */

    &__wrap {
      height: max-content;

      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }

    &__btn {
      position: absolute;
      left: 50%;
      top: 10px;
      transform: translateX(-50%);
    }
    &__item {
      color: white;
      display: grid;
      place-items: center;
      height: fit-content;

      &-logo {
        display: grid;
        place-items: center;
        width: 4rem;
        height: 4rem;
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0px 20px 20px rgba(41, 39, 77, 0.15);
        backdrop-filter: blur(11px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 15px;

        font-family: "Clear Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 21px;
      }
      &-name {
        margin: 10px 0;
        font-weight: 500;
        font-size: 11px;
        line-height: 100%;
        text-align: center;
      }
    }

    /* background: linear-gradient(180deg, #554cff 0%, rgba(85, 76, 255, 0) 100%); */
  }
`;
