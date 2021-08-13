import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { resetGameAction } from "../redux/actions/GameBauCuaAction";

export default function DiemCuoc(props) {
  const dispatch = useDispatch();
  const tienThuong = useSelector((state) => state.GameBauCuaReducer.tienThuong);
  return (
    <div>
      <div className="text-center">
        <a href="index.html">
          <img style={{ width: "50%" }} src="./assets/logo.png" alt="logo" />
        </a>
      </div>
      <div className="text-center mt-4">
        <span
          className="p-3"
          style={{
            color: "yellow",
            fontSize: 20,
            borderRadius: "5%",
            backgroundColor: "red",
            letterSpacing: 5,
          }}
        >
          Tiền Thưởng:{" "}
          <span
            style={{
              color: "#fff",
              fontSize: 25,
            }}
          >
            {tienThuong.toLocaleString()}
            <sub
              style={{
                color: "yellow",
                fontSize: 20,
              }}
            >
              $
            </sub>
          </span>
        </span>
      </div>

      <div className="text-center">
        <button
          onClick={() => {
            dispatch(resetGameAction());
          }}
          style={{
            backgroundColor: "rgba(226, 11, 174)",
            borderColor: "rgba(226, 11, 174)",
            letterSpacing: 2,
            marginTop: 30,
          }}
          className="btn btn-success"
        >
          Chơi lại
        </button>
      </div>
    </div>
  );
}
