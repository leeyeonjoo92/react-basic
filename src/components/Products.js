import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <section>
        <nav>
          <ul>
            <li>
              <Link to="/products/p1">1번 상품</Link>
            </li>
            <li>
              <Link to="/products/p2">2번 상품</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Products;
