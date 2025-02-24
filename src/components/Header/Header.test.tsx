import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header, { NAV_LINKS } from "./Header";

describe("Header Component", () => {
  it("should render the logo with correct text and link", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const logo = screen.getByText("NeoBank");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });

  it("should render all navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    NAV_LINKS.forEach(({ label, path }) => {
      const link = screen.getByText(label);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", path);
    });
  });

  it("should apply the active class to the active navigation link", () => {
    render(
      <MemoryRouter initialEntries={["/test1"]}>
        <Header />
      </MemoryRouter>,
    );
    const activeLink = screen.getByText("Product");
    expect(activeLink).toHaveClass("header__list-item--active");
  });

  it("should render the button with correct text", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const button = screen.getByRole("button", { name: "Online Bank" });
    expect(button).toBeInTheDocument();
  });
});
