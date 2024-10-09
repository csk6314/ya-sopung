import { useEffect, useState } from "react";

const useMediaMatch = (mediaSize: number) => {
  const [mq, setMq] = useState(window.innerWidth < mediaSize ? true : false);

  const changeHandler = (event: MediaQueryListEvent) => {
    const { matches } = event;
    setMq(matches);
  };

  useEffect(() => {
    const mql = window.matchMedia(`screen and (max-width:${mediaSize}px)`);
    mql.addEventListener("change", changeHandler);

    return () => mql.removeEventListener("change", changeHandler);
  }, [mediaSize]);

  return mq;
};

export default useMediaMatch;
