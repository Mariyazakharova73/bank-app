import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label component", () => {
  it("renders the label text", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    const labelText = screen.getByText("Test Label");
    expect(labelText).toBeInTheDocument();
    expect(labelText).toHaveClass("label__text");
  });

  it("renders the htmlFor attribute", () => {
    render(
      <>
        <Label htmlFor="test-input">Test Label</Label>
        <input id="test-input" />
      </>,
    );

    const label = screen.getByText("Test Label").closest("label");
    expect(label).toHaveAttribute("for", "test-input");
  });

  it("renders the required star when isRequired is true", () => {
    render(
      <Label
        htmlFor="test-input"
        isRequired
      >
        Test Label
      </Label>,
    );
    const star = screen.getByText("*");
    expect(star).toBeInTheDocument();
    expect(star).toHaveClass("label__star");
  });

  it("does not render the required star when isRequired is false", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    const star = screen.queryByText("*");
    expect(star).not.toBeInTheDocument();
  });
});
