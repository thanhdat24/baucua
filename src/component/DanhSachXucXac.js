import { useDispatch, useSelector } from "react-redux";

import React from "react";
import XucXac from "./XucXac";
import { playGameAction } from "../redux/actions/GameBauCuaAction";

export default function DanhSachXucXac() {
  const dispatch = useDispatch();
  const mangXucXac = useSelector((state) => state.GameBauCuaReducer.mangXucXac);
  // console.log(mangXucXac);
  return (
    <div className="ml-5 xucxac">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: 150, paddingLeft: 10 }}
      ></div>
      <div className="row xucxac__img1">
        <div className="text-center col-12 ">
          <XucXac xucXacItem={mangXucXac[0]} />
        </div>
      </div>
      <div className="row">
        <div className="col-4 text-right xucxac__img2">
          <XucXac xucXacItem={mangXucXac[1]} />
        </div>
        <div className="col-4  text-right xucxac__img3">
          <XucXac xucXacItem={mangXucXac[2]} />
        </div>
      </div>
      <div className="xucxac__button">
        <img
          onClick={() => {
            dispatch(playGameAction());
          }}
          style={{ width: "25%" }}
          src="./assets/soc.png"
          alt="soc"
        />
      </div>
    </div>
  );
}
