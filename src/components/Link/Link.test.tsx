import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Link from "./Link";

describe("Link component", () => {
  it("renders a RouterLink when the link is internal", () => {
    render(
      <BrowserRouter>
        <Link to="/internal-page">Internal Link</Link>
      </BrowserRouter>,
    );

    const link = screen.getByText("Internal Link");
    expect(link).toHaveAttribute("href", "/internal-page");
  });

  it("renders an <a> tag when the link is external", () => {
    render(
      <Link
        to="https://external.com"
        external={true}
      >
        External Link
      </Link>,
    );

    const link = screen.getByText("External Link");
    expect(link).toHaveAttribute("href", "https://external.com");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("renders an <a> tag with correct target and rel attributes for external links", () => {
    render(
      <Link
        to="https://external.com"
        external={true}
        target="_blank"
        rel="noopener noreferrer"
      >
        External Link
      </Link>,
    );

    const link = screen.getByText("External Link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the correct classes", () => {
    render(
      <BrowserRouter>
        <Link
          to="/internal-page"
          className="custom-class"
        >
          Link with Class
        </Link>
      </BrowserRouter>,
    );

    const link = screen.getByText("Link with Class");
    expect(link).toHaveClass("link", "custom-class");
  });
});
