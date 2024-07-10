import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

const RootElement = () => {
  return (
    <div>
      <MainHeader />
      {/* rootelement에만 들어가는 개념으로 꼭 넣어줘야함 */}
      {/* path별로 컴포넌트들을 element로 넣어주는데 */}
      {/* 이게 rootelement의 outlet에 들어감 */}
      <Outlet />
    </div>
  );
};

export default RootElement;
