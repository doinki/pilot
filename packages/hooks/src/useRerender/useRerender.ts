import { useReducer } from 'react';

const reducer = (x: number) => x + 1;

const useRerender = () => {
  const [, rerender] = useReducer(reducer, 0);

  return rerender;
};

export default useRerender;
