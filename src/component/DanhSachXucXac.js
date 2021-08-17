import { useDispatch, useSelector } from "react-redux";

import React from "react";
import XucXac from "./XucXac";
import { playGameAction } from "../redux/actions/GameBauCuaAction";

export default function DanhSachXucXac() {
  const dispatch = useDispatch();
  const mangXucXac = useSelector((state) => state.GameBauCuaReducer.mangXucXac);
  // console.log(mangXucXac);
  return (
    <div className="ml-5 text-center xucxac">
      <div
        className="plate"
        style={{
          backgroundImage: "url(./assets/plate.png)",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xucxac__item">
          <div className="col-6">
            <XucXac xucXacItem={mangXucXac[0]} />
          </div>
          <div className="col-6">
            <XucXac xucXacItem={mangXucXac[1]} />
          </div>
        </div>
        <div className="xucxac__item mt-2">
          <div className="col-6">
            <XucXac xucXacItem={mangXucXac[2]} />
          </div>
        </div>
      </div>
      <div className="xucxac__button mt-3">
        <img
          onClick={() => {
            dispatch(playGameAction());
          }}
          style={{ width: "30%" }}
          src="./assets/soc.png"
          alt="soc"
        />
      </div>
    </div>
  );
}
