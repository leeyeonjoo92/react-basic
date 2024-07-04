import React, { memo } from "react";

const DummyText = (props) => {
  props.func();
  console.log("child component rendering");
  return <p>hello dummy</p>;
};

export default memo(DummyText);
