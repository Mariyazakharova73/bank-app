import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader component", () => {
  it("renders the spinner container", () => {
    const { container } = render(<Loader />);

    const spinnerContainer = container.querySelector(".spinner");

    expect(spinnerContainer).toBeInTheDocument();
  });

  it("renders the spinner image", () => {
    render(<Loader />);

    const spinnerImage = screen.getByAltText("Spinner");

    expect(spinnerImage).toBeInTheDocument();
    expect(spinnerImage).toHaveAttribute("src", expect.stringContaining("spinner.png"));
  });

  it("renders with the correct alt text", () => {
    render(<Loader />);

    const spinnerImage = screen.getByAltText("Spinner");
    expect(spinnerImage).toHaveAttribute("alt", "Spinner");
  });
});
