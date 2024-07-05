import React, { useEffect, useState } from "react";

const useCounter = (isForward) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // isForward가 true면 양수, false면 음수
      setCounter((prevCounter) => prevCounter + 1 * (isForward ? 1 : -1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // forwardCounter나 BackwardCounter에서 counter값을 받고있기때문에 useCounter에서 보내줘야함
  return counter;
};

export default useCounter;
