import { render, screen } from "@testing-library/react";
import Features from "./Features";

vi.mock("../../utils/constants/constants", () => ({
  FEATURES_LIST: ["Feature 1", "Feature 2", "Feature 3"],
}));

describe("Features component", () => {
  it("renders the title and description", () => {
    render(<Features />);

    expect(screen.getByText("We Provide Many Features You Can Use")).toBeInTheDocument();
    expect(
      screen.getByText(
        "You can explore the features that we provide with fun and have their own functions each feature",
      ),
    ).toBeInTheDocument();
  });

  it("renders the correct number of features", () => {
    render(<Features />);

    const featureItems = screen.getAllByRole("listitem");
    expect(featureItems).toHaveLength(3);

    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByText("Feature 3")).toBeInTheDocument();
  });

  it("renders the image with correct src and alt", () => {
    render(<Features />);

    const image = screen.getByAltText("Человек работает за ноутбуком");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("features-man.png"));
  });
});
