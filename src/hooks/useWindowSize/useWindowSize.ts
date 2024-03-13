import { useEffect, useRef, useState } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const setSizes = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', setSizes);
    return () => {
      window.removeEventListener('resize', setSizes);
    };
  }, []);


  return {
    width,
    height,
  };
};