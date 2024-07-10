import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  // 리액트라우터돔에서 파라미터를 받는 훅
  const params = useParams();
  console.log(params); // {productId: 'p1'}

  return (
    <section>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
