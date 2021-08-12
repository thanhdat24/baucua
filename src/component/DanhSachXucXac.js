import React from "react";

export default function DanhSachXucXac() {
  return (
    <div className="ml-5 xucxac">
      <div
        className="bg-white"
        style={{ width: 250, height: 250, borderRadius: "50%" }}
      ></div>
      <div className="row">
        <div className="xucxac__img1">
          <img style={{ width: "25%" }} src="./assets/bau.png" alt="bau" />
        </div>
        <div className="xucxac__img2">
          <img style={{ width: "25%" }} src="./assets/bau.png" alt="bau" />
        </div>
        <div className="xucxac__img3">
          <img style={{ width: "25%" }} src="./assets/bau.png" alt="bau" />
        </div>
      </div>
      <div className="xucxac__button">
        <img style={{ width: "25%" }} src="./assets/soc.png" alt="soc" />
      </div>
    </div>
  );
}
