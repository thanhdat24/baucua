import QuanCuoc from "./QuanCuoc";
import React from "react";
import { useSelector } from "react-redux";

export default function DanhSachCuoc(props) {
  const mangCuoc = useSelector((state) => state.GameBauCuaReducer.mangCuoc);
  console.log(mangCuoc);

  const rendermangCuoc = () => {
    return mangCuoc.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <QuanCuoc quanCuoc={item} />
        </div>
      );
    });
  };
  return <div className="row">{rendermangCuoc()}</div>;
}
