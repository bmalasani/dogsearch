import { act, renderHook, waitFor } from "@testing-library/react";
import useFetch from "./useFetch";

global.fetch = jest.fn(() =>
  Promise.resolve<any>({
    ok: true,
    json: () => Promise.resolve({}),
  })
);

describe("useFetch", () => {
  it("should be defined", () => {
    expect(useFetch).toBeDefined();
  });

  it("should return three values", async () => {
    const promise = Promise.resolve<any>({
      ok: true,
      json: () => Promise.resolve({}),
    });
    global.fetch = jest.fn(() => promise);
    const hook = renderHook(() => useFetch(""));
    expect(hook.result.current.loading).toBe(true);
    await act(async () => {
      await promise;
    });
    expect(Object.keys(hook.result.current).length).toBe(3);
    expect(hook.result.current.loading).toBe(false);
  });
  
  it("should return error", async () => {
    const promise = Promise.resolve<any>({
      ok: false,
      json: () => Promise.resolve({}),
    });
    global.fetch = jest.fn(() => promise);
    const hook = renderHook(() => useFetch(""));

    await act(async () => {
      await promise;
    });
    expect(Object.keys(hook.result.current).length).toBe(3);
    expect(hook.result.current.error).not.toBeNull();
  });

});
