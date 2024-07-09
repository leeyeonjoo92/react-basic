import React, { useCallback, useState } from "react";

// requestConfig -> 요청을 보낼때 필요한 url, method, body, content-type 등
// applyData -> 받아온 데이터
// requestConfig, applyData가 sendRequest 안에서만 사용되고 있기 때문에 sendRequest의 매개변수로 넣어줘도됨
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 컴포넌트가 리렌더링 될때마다 함수는 새로 생성됨 (값은 그대로)
  // 값이 바뀔일이 있을때만 새로 생성이되고
  // 바뀌지 않으면 값을 그대로 사용하면 될것같음 -> useCallback 사용
  // 의존성 배열에 requestConfig, applyData 넣으면됨
  const sendRequest = useCallback(async (requestConfig, applyData) => {
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
    // 값이 바뀔만한게 매개변수로 받는 requestConfig와 applyData 밖에 없음
    // useHttp의 매개변수로 받던 requestConfig, applyData의 위치를 sendRequest로 옮겼기때문에 의존성 배열에 안넣어줘도됨
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
