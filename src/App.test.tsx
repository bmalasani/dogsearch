import { render } from "@testing-library/react";
import App from "./App";

describe("Test App", () => {
  it("should be rendered", () => {
    const app = render(<App />);
    expect(app).toBeDefined();
  });
});
