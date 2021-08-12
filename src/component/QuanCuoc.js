import React from "react";

export default function QuanCuoc(props) {
  const { quanCuoc } = props;
  return (
    <div className="mt-3">
      <img style={{ width: "55%" }} src={quanCuoc.hinhAnh} alt={quanCuoc.ma} />
      <div
        className="bg-success"
        style={{ width: "55%", borderRadius: "10px" }}
      >
        <div className="text-center mt-2">
          <button className="btn btn-danger my-1">
            <i style={{ fontSize: 13 }} className="fa fa-plus"></i>
          </button>
          <span className="mx-2" style={{ color: "yellow", fontSize: 20 }}>
            {quanCuoc.diemCuoc}
          </span>
          <button className="btn btn-danger">
            <i style={{ fontSize: 13 }} className="fa fa-minus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
