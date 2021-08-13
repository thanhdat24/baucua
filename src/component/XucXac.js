import React, { Fragment } from "react";

export default function XucXac(props) {
  const { xucXacItem } = props;
  return (
    <Fragment>
      <div className="scene">
        <div className="cube">
          <img
            className="ml-3 cube__face front"
            style={{ width: 50 }}
            src={xucXacItem.hinhAnh}
            alt={xucXacItem.ma}
          />
          <img
            className="ml-3 cube__face right"
            style={{ width: 50 }}
            src="./assets/bau.png"
            alt="bau"
          />
          <img
            className="ml-3 cube__face back"
            style={{ width: 50 }}
            src="./assets/ga.png"
            alt="ga"
          />
          <img
            className="ml-3 cube__face left"
            style={{ width: 50 }}
            src="./assets/ca.png"
            alt="ca"
          />
          <img
            className="ml-3 cube__face top"
            style={{ width: 50 }}
            src="./assets/tom.png"
            alt="tom"
          />
          <img
            className="ml-3 cube__face bottom"
            style={{ width: 50 }}
            src="./assets/cua.png"
            alt="cua"
          />
        </div>
      </div>
    </Fragment>
  );
}
