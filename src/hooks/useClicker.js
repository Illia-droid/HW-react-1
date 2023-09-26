import { useEffect, useState } from "react";

const useClicker = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const handleClick = () => {
      setCount((prevCount) => prevCount + 1);
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return count;
};
export default useClicker;
