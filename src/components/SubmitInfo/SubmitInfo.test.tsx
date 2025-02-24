import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SubmitInfo from "./SubmitInfo";

describe("SubmitInfo Component", () => {
  it("should render correctly with title and text", () => {
    render(
      <SubmitInfo
        title="Test Title"
        text="Test text"
      />,
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test text")).toBeInTheDocument();
  });

  it("should render with border when withBorder is true", () => {
    render(
      <SubmitInfo
        title="Test Title"
        text="Test text"
        withBorder
      />,
    );

    const submitInfo = screen.getByText("Test Title").closest("div");
    expect(submitInfo).not.toHaveClass("submit-info--no-border");
  });

  it("should render without border when withBorder is false", () => {
    render(
      <SubmitInfo
        title="Test Title"
        text="Test text"
        withBorder={false}
      />,
    );

    const submitInfo = screen.getByText("Test Title").closest("div");
    expect(submitInfo).toHaveClass("submit-info--no-border");
  });

  it("should render correctly without border when withBorder is not provided", () => {
    render(
      <SubmitInfo
        title="Test Title"
        text="Test text"
      />,
    );

    const submitInfo = screen.getByText("Test Title").closest("div");
    expect(submitInfo).toHaveClass("submit-info--no-border");
  });
});
