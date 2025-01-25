import { render, screen } from "@testing-library/react";
import Circle from "./Circle";

describe("Circle component", () => {
  it("renders the Circle component", () => {
    render(<Circle isSuccess={true} />);

    const circleElement = screen.getByRole("status");
    expect(circleElement).toBeInTheDocument();
  });

  it("applies 'circle--success' class when isSuccess is true", () => {
    render(<Circle isSuccess={true} />);

    const circleElement = screen.getByRole("status");
    expect(circleElement).toHaveClass("circle--success");
  });

  it("applies 'circle--error' class when isSuccess is false", () => {
    render(<Circle isSuccess={false} />);

    const circleElement = screen.getByRole("status");
    expect(circleElement).toHaveClass("circle--error");
  });
});
