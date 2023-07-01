import { useEffect, useReducer } from 'react';

const reducer = () => true;

const useIsMounted = () => {
  const [isMounted, dispatch] = useReducer(reducer, false);

  useEffect(() => {
    dispatch();
  }, []);

  return isMounted;
};

export default useIsMounted;
