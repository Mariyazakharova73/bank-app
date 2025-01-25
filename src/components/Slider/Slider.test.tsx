import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Article } from "../../types/apiTypes";
import Slider from "./Slider";

const MOCK_ARTICLES: Article[] = [
  {
    title: "Article 1",
    description: "Description 1",
    url: "https://example.com/1",
    urlToImage: "https://example.com/image1.jpg",
    source: { id: "", name: "" },
    author: null,
    publishedAt: "",
    content: null,
  },
  {
    title: "Article 2",
    description: "Description 2",
    url: "https://example.com/2",
    urlToImage: "https://example.com/image2.jpg",
    source: { id: "", name: "" },
    author: null,
    publishedAt: "",
    content: null,
  },
];

vi.mock("uuid", () => ({
  v4: vi.fn(() => "unique-id"),
}));

describe("Slider Component", () => {
  it("should render correctly with articles", () => {
    render(<Slider articles={MOCK_ARTICLES} />);
    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
  });

  it("should disable the previous button when on the first slide", () => {
    render(<Slider articles={MOCK_ARTICLES} />);

    expect(screen.getByRole("button", { name: /Назад/i })).toBeDisabled();
  });

  it("should change the current index when the next button is clicked", () => {
    render(<Slider articles={MOCK_ARTICLES} />);

    fireEvent.click(screen.getByRole("button", { name: /Вперед/i }));

    expect(screen.getByText("Article 2")).toBeInTheDocument();
  });

  it("should change the current index when the previous button is clicked", () => {
    render(<Slider articles={MOCK_ARTICLES} />);

    fireEvent.click(screen.getByRole("button", { name: /Вперед/i }));
    fireEvent.click(screen.getByRole("button", { name: /Назад/i }));
    expect(screen.getByText("Article 1")).toBeInTheDocument();
  });
});
