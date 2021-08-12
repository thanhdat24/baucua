import React, { Fragment } from "react";

export default function XucXac(props) {
  const { xucXacItem } = props;
  return (
    <Fragment>
      <img
        style={{ width: "25%" }}
        src={xucXacItem.hinhAnh}
        alt={xucXacItem.ma}
      />
    </Fragment>
  );
}
