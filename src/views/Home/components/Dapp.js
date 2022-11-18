import React, { useEffect, useState, useRef } from "react";

export default function Dapp({ dapps }) {
  const ref = useRef();

  const [height, setHeight] = useState(200);
  // useEffect(() => {
  //   setHeight(ref.current.clientHeight);
  // }, []);

  const handler = (mouseDownEvent) => {
    const startSize = height;
    const startPosition = mouseDownEvent.pageY;
    function onMouseMove(mouseMoveEvent) {
      setHeight(
        (currentSize) => startSize + (startPosition - mouseMoveEvent.pageY)
      );
    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
    }
    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };

  return (
    <div
      className="dapp"
      ref={ref}
      style={{ height: height }}
      onMouseDown={handler}
    >
      <div className="dapp__wrap">
        <img className="dapp__btn" src="./open-dapp.svg" alt="" />

        {dapps.map((d) => {
          return (
            <div className="dapp__item">
              <div className="dapp__item-logo">D</div>
              <div className="dapp__item-name">{d.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
