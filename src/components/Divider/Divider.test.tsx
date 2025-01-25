import { render, screen } from "@testing-library/react";
import Divider from "./Divider";

describe("Divider component", () => {
  it("renders with the correct color", () => {
    render(<Divider color="rgba(255, 0, 0, 0.2)" />);

    const divider = screen.getByRole("presentation");
    expect(divider).toHaveStyle("background-color: rgba(255, 0, 0, 0.2)");
  });

  it("renders with the correct size", () => {
    render(<Divider size="medium" />);

    const divider = screen.getByRole("presentation");
    expect(divider).toHaveClass("divider--medium");
  });

  it("renders with the correct classNames", () => {
    render(<Divider classNames="custom-class" />);

    const divider = screen.getByRole("presentation");
    expect(divider).toHaveClass("divider", "custom-class");
  });

  it("renders with default props", () => {
    render(<Divider />);

    const divider = screen.getByRole("presentation");
    expect(divider).toHaveStyle("background-color: rgba(128, 128, 128, 0.2)");
    expect(divider).toHaveClass("divider--small");
  });
});
