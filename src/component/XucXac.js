import React, { Fragment } from "react";
import { animated, useSpring } from "react-spring";

export default function XucXac(props) {
  let { xucXacItem } = props;
  const [propsDice, set] = useSpring(() => {
    return {
      to: {
        xyz: [0, 16, 0],
      },
      from: {
        xyz: [0, 720, 90],
      },
      config: { duration: 720 },
      reset: true,
    };
  });
  set({
    to: {
      xyz: [0, 16, 0],
    },
    from: {
      xyz: [0, 720, 90],
    },
    config: { duration: 720 },
    reset: true,
  });
  return (
    <Fragment>
      <animated.div className="ex1">
        <animated.div
          style={{
            transform: propsDice.xyz.interpolate(
              (x, y, z) => ` rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
            ),
          }}
          className="cube"
        >
          <div className="side front">
            <img
              style={{ width: "100%" }}
              src={xucXacItem.hinhAnh}
              alt={xucXacItem.hinhAnh}
            />
          </div>
          <div className="side back">
            <img
              style={{ width: "100%" }}
              src="./assets/bau.png"
              alt="./assets/bau.png"
            />
          </div>
          <div className="side right">
            <img
              style={{ width: "100%" }}
              src="./assets/ga.png"
              alt="./assets/ga.png"
            />
          </div>
          <div className="side left">
            <img
              style={{ width: "100%" }}
              src="./assets/ca.png"
              alt="./assets/ca.png"
            />
          </div>
          <div className="side top">
            <img
              style={{ width: "100%" }}
              src="./assets/tom.png"
              alt="./assets/tom.png"
            />
          </div>
          <div className="side bottom">
            <img
              style={{ width: "100%" }}
              src="./assets/nai.png"
              alt="./assets/nai.png"
            />
          </div>
        </animated.div>
      </animated.div>
    </Fragment>
  );
}
