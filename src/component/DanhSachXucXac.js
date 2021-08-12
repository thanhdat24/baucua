import React from "react";
import XucXac from "./XucXac";
import { useSelector } from "react-redux";

export default function DanhSachXucXac() {
  const mangXucXac = useSelector((state) => state.GameBauCuaReducer.mangXucXac);
  console.log(mangXucXac);
  return (
    <div className="ml-5 xucxac">
      <div
        className="bg-white"
        style={{ width: 250, height: 250, borderRadius: "50%" }}
      ></div>
      <div className="row">
        <div className="xucxac__img1">
          <XucXac xucXacItem={mangXucXac[0]} />
        </div>
        <div className="xucxac__img2">
          <XucXac xucXacItem={mangXucXac[1]} />
        </div>
        <div className="xucxac__img3">
          <XucXac xucXacItem={mangXucXac[2]} />
        </div>
      </div>
      <div className="xucxac__button">
        <img style={{ width: "25%" }} src="./assets/soc.png" alt="soc" />
      </div>
    </div>
  );
}
