import { render } from "@testing-library/react";
import DogRow, { Dog } from "../DogRow";

describe("DogRow", () => {
  const dog: Dog = {
    weight: {
      imperial: "6 - 13",
      metric: "3 - 6",
    },
    height: {
      imperial: "9 - 11.5",
      metric: "23 - 29",
    },
    name: "Affenpinscher",
    breed_group: "Toy",
    life_span: "10 - 12 years",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    reference_image_id: "BJa4kxc4X",
  };
  it("should be defined", () => {
    expect(DogRow).toBeDefined();
  });
  it("should render content", () => {
    const { queryAllByText } = render(<DogRow {...dog} />);
    expect(queryAllByText("Affenpinscher").length).toBe(1);
  });
});
