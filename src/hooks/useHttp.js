import React, { useState } from "react";

// requestConfig -> 요청을 보낼때 필요한 url, method, body, content-type 등
// applyData -> 받아온 데이터
const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        // 두번째 인자는 필요한 경우에만 작성
        // requestConfig.method가 있으면 method 불러오고, 없으면 get요청을 보냄
        method: requestConfig?.method ? requestConfig.method : "GET",
        headers: requestConfig?.headers ? requestConfig.headers : {},
        body: requestConfig?.body ? requestConfig.body : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      // fetch는 값을 받아오든지 적용해주는 함수가 필요함
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

	return {
		isLoading,
		error,
		sendRequest,
	}
};

export default useHttp;
