import { render } from "@testing-library/react";
import SearchInput from "../SearchInput";

describe("SearchInput", () => {
  it("should render SearchInput", () => {
    const searchInput = render(<SearchInput/>);
    expect(searchInput).toBeDefined();
  });
});
