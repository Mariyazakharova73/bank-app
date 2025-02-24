import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SectionTitle, { TitlePosition, TitleTheme } from "./SectionTitle";

describe("SectionTitle Component", () => {
  it("should render with the correct text", () => {
    render(<SectionTitle>Test Title</SectionTitle>);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should have the correct class for theme", () => {
    const { container } = render(<SectionTitle theme={TitleTheme.LIGHT}>Test</SectionTitle>);
    expect(container.firstChild).toHaveClass("section-title--light");
  });

  it("should have the correct class for position", () => {
    const { container } = render(<SectionTitle position={TitlePosition.CENTER}>Test</SectionTitle>);
    expect(container.firstChild).toHaveClass("section-title--center");
  });

  it("should support combined classes for theme and position", () => {
    const { container } = render(
      <SectionTitle
        theme={TitleTheme.DARK}
        position={TitlePosition.RIGHT}
      >
        Test
      </SectionTitle>,
    );
    expect(container.firstChild).toHaveClass("section-title--dark");
    expect(container.firstChild).toHaveClass("section-title--right");
  });

  it("should pass other props such as className and other attributes", () => {
    const { container } = render(
      <SectionTitle
        className="additional-class"
        data-testid="test-id"
      >
        Test
      </SectionTitle>,
    );
    expect(container.firstChild).toHaveClass("additional-class");
    expect(screen.getByTestId("test-id")).toBeInTheDocument();
  });
});
