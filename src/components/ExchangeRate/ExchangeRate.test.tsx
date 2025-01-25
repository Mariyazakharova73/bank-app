import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { fetchCurrencyRates } from "../../api/currencyApi";
import bankImg from "../../assets/images/exchange-bank.png";
import ExchangeRate from "./ExchangeRate";

vi.mock("../../api/currencyApi", () => ({
  fetchCurrencyRates: vi.fn(),
}));

describe("ExchangeRate component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("displays error message on API failure", async () => {
    (fetchCurrencyRates as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
      new Error("Error loading currencies"),
    );
    render(<ExchangeRate />);

    await waitFor(() => expect(screen.getByText(/Error loading currencies/i)).toBeInTheDocument());
  });

  it("renders 'All courses' button", () => {
    render(<ExchangeRate />);

    expect(screen.getByRole("button", { name: /All courses/i })).toBeInTheDocument();
  });

  it("renders the bank image with correct src and alt", () => {
    render(<ExchangeRate />);

    const image = screen.getByAltText("Банк");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", bankImg);
  });
});
