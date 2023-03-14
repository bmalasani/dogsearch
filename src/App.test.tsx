import { render, waitFor } from "@testing-library/react";
import App from "./App";
import { Dog } from "./components/DogRow";
import useFetch from "./utils/useFetch";

jest.mock("./utils/useFetch");

describe("Test App", () => {
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
    expect(App).toBeDefined();
  });
  it("should be rendered", () => {
    (useFetch as jest.Mock).mockImplementation((url: any, options: any) => {
      return { loading: true, data: null, error: null };
    });
    const app = render(<App />);
    expect(app.queryAllByText("Dog Search").length).toBe(1);
  });
  it("should be rendered when error occured", () => {
    (useFetch as jest.Mock).mockImplementation((url: any, options: any) => {
      return {
        loading: false,
        data: null,
        error: new Error("Something bad happend"),
      };
    });
    const app = render(<App />);
    waitFor(() => app.queryAllByText("Something"));
    expect(
      app.queryAllByText("An error occurred. Something bad happend").length
    ).toBe(1);
  });
  it("should be rendered when response", () => {
    (useFetch as jest.Mock).mockImplementation((url: any, options: any) => {
      return { loading: false, data: [dog], error: null };
    });
    const app = render(<App />);
    waitFor(() => app.queryAllByText("Affenpinscher"));
    expect(app.queryAllByText("Affenpinscher").length).toBe(1);
  });
});
