import { animated, useSpring } from "react-spring";

import React from "react";
import { datCuocAction } from "../redux/actions/GameBauCuaAction";
import { useDispatch } from "react-redux";

export default function QuanCuoc(props) {
  const plusAmount = true;
  const minusAmount = false;
  const dispatch = useDispatch();
  const [propsUseSpringInCrease, apiInCrease] = useSpring(() => ({
    to: { scale: 1 },
    from: { scale: 0.75 },
    reset: true,
  }));
  const [propsUseSpringDeCrease, apiDeCrease] = useSpring(() => ({
    to: { scale: 1 },
    from: { scale: 0.75 },
    reset: true,
  }));
  const { quanCuoc } = props;
  return (
    <div className="mt-3" style={{ position: "relative" }}>
      {quanCuoc.soLuong > 0 ? (
        <div className="quantity">{quanCuoc.soLuong}</div>
      ) : (
        <div></div>
      )}
      <img style={{ width: "55%" }} src={quanCuoc.hinhAnh} alt={quanCuoc.ma} />
      <div
        className="bg-success"
        style={{ width: "55%", borderRadius: "10px" }}
      >
        <div className="text-center mt-2">
          <animated.button
            style={{
              transform: propsUseSpringInCrease.scale.interpolate(
                (scale) => `scale(${scale})`
              ),
            }}
            onClick={() => {
              apiInCrease({ scale: 0.75 });
              apiInCrease({ scale: 1 });
              dispatch(datCuocAction(quanCuoc, plusAmount));
            }}
            className="btn btn-danger my-1"
          >
            <i style={{ fontSize: 13 }} className="fa fa-plus"></i>
          </animated.button>
          <span className="mx-2" style={{ color: "yellow", fontSize: 20 }}>
            {quanCuoc.diemCuoc}
          </span>
          <animated.button
            style={{
              transform: propsUseSpringDeCrease.scale.interpolate(
                (scale) => `scale(${scale})`
              ),
            }}
            onClick={() => {
              apiDeCrease({ scale: 0.75 });
              apiDeCrease({ scale: 1 });
              dispatch(datCuocAction(quanCuoc, minusAmount));
            }}
            className="btn btn-danger"
          >
            <i style={{ fontSize: 13 }} className="fa fa-minus"></i>
          </animated.button>
        </div>
      </div>
    </div>
  );
}
