import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("should render the logo with correct alt text", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const logo = screen.getByAltText("Логотип");
    expect(logo).toBeInTheDocument();
  });

  it("should render contact information correctly", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const telLink = screen.getByText("+7 (495) 984 25 13");
    const emailLink = screen.getByText("info@neoflex.ru");
    expect(telLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
    expect(telLink).toHaveAttribute("href", "tel:+74959842513");
    expect(emailLink).toHaveAttribute("href", "mailto:info@neoflex.ru");
  });

  it("should render the cookie disclaimer text", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const disclaimer = screen.getByText(
      /We use cookies to personalize our services and improve the user experience of our website/i,
    );
    expect(disclaimer).toBeInTheDocument();
  });

  it("should render a divider element", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const divider = screen.getByRole("separator");
    expect(divider).toBeInTheDocument();
  });
});
