import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { fetchNewsRates } from "../../api/newsApi";
import News from "./News";

const MOCK_ARTICLES = [
  {
    title: "News 1",
    id: 1,
    source: "",
    author: "",
    description: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
    content: "",
  },
  {
    title: "News 2",
    id: 2,
    source: "",
    author: "",
    description: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
    content: "",
  },
];

vi.mock("../../api/newsApi", () => ({
  fetchNewsRates: vi.fn(),
}));

vi.mock("../../utils/helpers/helpers", () => ({
  getMs: () => 1000,
}));

describe("News Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the section title and description", () => {
    render(<News />);
    expect(screen.getByText("Current news from the world of finance")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.",
      ),
    ).toBeInTheDocument();
  });

  it("displays the loader while fetching news", async () => {
    (fetchNewsRates as ReturnType<typeof vi.fn>).mockImplementation(() => new Promise(() => {}));

    render(<News />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders news content after successful API call", async () => {
    (fetchNewsRates as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      articles: MOCK_ARTICLES,
    });

    render(<News />);
    await waitFor(() => {
      expect(screen.getByText("News 1")).toBeInTheDocument();
      expect(screen.getByText("News 2")).toBeInTheDocument();
    });
  });

  it("displays an error message if API call fails", async () => {
    (fetchNewsRates as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error("API Error"));

    render(<News />);
    await waitFor(() => {
      expect(screen.getByText("Error loading news")).toBeInTheDocument();
    });
  });

  it("displays a message when no data is available", async () => {
    (fetchNewsRates as ReturnType<typeof vi.fn>).mockResolvedValueOnce({ articles: [] });

    render(<News />);
    await waitFor(() => {
      expect(screen.getByText("Нет данных для отображения")).toBeInTheDocument();
    });
  });
});
