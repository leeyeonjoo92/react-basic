import React from "react";

const AuthContext = React.createContext({
  // 초기값
  isLoggedIn: false,
});

export default AuthContext;
