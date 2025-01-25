import { render, screen } from "@testing-library/react";
import World from "./World";

describe("World component", () => {
  it("renders the SectionTitle with correct text", () => {
    render(<World />);
    expect(screen.getByText("You can use our services anywhere in the world")).toBeInTheDocument();
  });

  it("renders the paragraph with the correct text", () => {
    render(<World />);

    expect(
      screen.getByText("Withdraw and transfer money online through our application"),
    ).toBeInTheDocument();
  });

  it("renders the world image with correct alt text", () => {
    render(<World />);

    const image = screen.getByAltText("Карта мира");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("world.png"));
  });
});
