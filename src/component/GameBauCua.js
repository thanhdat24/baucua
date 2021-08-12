import "./GameBauCua.css";

import DanhSachCuoc from "./DanhSachCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import DiemCuoc from "./DiemCuoc";
import React from "react";

export default function GameBauCua() {
  return (
    <div id="GameBauCua" className="container-fluid">
      <DiemCuoc />
      <div className="row">
        <div className="col-8">
          <DanhSachCuoc />
        </div>
        <div className="col-4">
          <DanhSachXucXac />
        </div>
      </div>
    </div>
  );
}
