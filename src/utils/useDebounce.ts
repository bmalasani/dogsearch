import React, {
  DependencyList,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

function useDebounce(fn: (...args: any) => unknown, delay: number) {
  const callback = useRef(fn);
  const timeout = useRef<any>();
  const [args, setArgs] = useState<any[]>([]);

  useCallback(() => {
    callback.current = fn;
  }, [fn]);

  useEffect(() => {
    timeout.current = setTimeout(() => callback.current(...args), delay);
    return clear;
  }, [args, delay]);

  const clear = () => clearTimeout(timeout.current);

  return { clear, setArgs };
}
export default useDebounce;
