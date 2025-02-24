import { render, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip component", () => {
  it("displays the tooltip text correctly", () => {
    render(
      <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(screen.getByText("This is a tooltip")).toBeInTheDocument();
  });

  it("displays the children element correctly", () => {
    render(
      <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("does not render tooltip if text is empty", () => {
    render(
      <Tooltip text="">
        <button>Hover me</button>
      </Tooltip>,
    );

    const tooltipElement = screen.queryByText("Tooltip text");
    expect(tooltipElement).not.toBeInTheDocument();
  });
});
