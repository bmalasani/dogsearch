/* eslint-disable @typescript-eslint/no-empty-function */
import { renderHook } from "@testing-library/react";
import { DependencyList } from "react";
import useDebounce from "./useDebounce";

describe("useDebounce", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it("should be defined", () => {
    expect(useDebounce).toBeDefined();
  });

  it("should return clear fn", () => {
    const hook = renderHook(() => useDebounce(() => {}, 10));
    expect(hook.result.current.clear).toBeDefined();
    expect(typeof hook.result.current.clear).toBe("function");
  });

  it("should not call function on unmount", () => {
    const spy = jest.fn();
    const hook = renderHook(() => useDebounce(spy, 5));
    expect(spy).not.toHaveBeenCalled();
    hook.unmount();
    jest.advanceTimersByTime(5);
    expect(spy).not.toHaveBeenCalled();
  });

  it("should call function after delay", () => {
    const spy = jest.fn();
    const hook = renderHook(() => useDebounce(spy, 5));
    expect(spy).not.toHaveBeenCalled();
    jest.advanceTimersByTime(5);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
