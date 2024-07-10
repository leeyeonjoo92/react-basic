import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome">welcome</NavLink>
          </li>
          <li>
            <NavLink to="/products">products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
