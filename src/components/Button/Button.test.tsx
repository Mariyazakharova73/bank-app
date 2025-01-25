import { fireEvent, render, screen } from "@testing-library/react";
import Button, { BtnRadius, BtnSizes, BtnTheme } from "./Button";

describe("Button Component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn", "btn--primary", "btn--size_m", "btn--radius_default");
  });

  it("applies the correct theme class", () => {
    render(<Button theme={BtnTheme.SECONDARY}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass("btn--secondary");
  });

  it("applies the correct radius class", () => {
    render(<Button radius={BtnRadius.SMALL}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass("btn--radius_small");
  });

  it("applies the correct size class", () => {
    render(<Button size={BtnSizes.L}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass("btn--size_l");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when `disabled` prop is true", () => {
    render(<Button disabled>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("btn--disabled");
  });
});
