import { useRef, useEffect } from 'react';

/* Custom hook that returns the previous value of the provided value */
const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
