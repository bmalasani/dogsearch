import { render } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
  it("should render card", () => {
    const card = render(<Card></Card>);
    expect(card).toBeDefined();
  });

  it("should render children", () => {
    const {queryAllByText} = render(
      <Card>
        <div id="child-id">Children</div>
      </Card>
    );
    expect(queryAllByText('Children').length).toEqual(1);
  });
});
