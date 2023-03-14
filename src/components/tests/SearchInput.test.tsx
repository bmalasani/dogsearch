import { fireEvent, render, waitFor } from "@testing-library/react";
import SearchInput from "../SearchInput";

jest.mock("../../utils/useDebounce", () => ({
  default: (fn: any, delay: any) => {
    fn();
    return { setArgs: jest.fn() };
  },
}));

describe("SearchInput", () => {
  it("should be defined", () => {
    expect(SearchInput).toBeDefined();
  });

  it("should render SearchInput", () => {
    const spy = jest.fn();
    const { getByTestId } = render(<SearchInput onChange={spy} />);
    expect(getByTestId("input-search").tagName).toBe("INPUT");
  });

  it("should render SearchInput", () => {
    const spy = jest.fn();
    const { getByTestId } = render(<SearchInput onChange={spy} />);
    expect(getByTestId("input-search").tagName).toBe("INPUT");
    fireEvent.change(getByTestId("input-search"), { target: { value: "Dog" } });
    expect(spy).toHaveBeenCalled();
  });
});
