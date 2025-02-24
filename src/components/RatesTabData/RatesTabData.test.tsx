import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import RatesTabData from "./RatesTabData";

vi.mock("../../utils/constants/loan", () => ({
  RATES_CARD_DATA: [
    {
      id: 1,
      label: "Rate 1",
      value: ["100%", "200%"],
    },
    {
      id: 2,
      label: "Rate 2",
      value: ["50%", "150%"],
    },
  ],
}));

describe("RatesTabData", () => {
  it("should render the rate labels correctly", () => {
    render(<RatesTabData />);

    expect(screen.getByText("Rate 1")).toBeInTheDocument();
    expect(screen.getByText("Rate 2")).toBeInTheDocument();
  });

  it("should render the rate values correctly", () => {
    render(<RatesTabData />);

    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("200%")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("150%")).toBeInTheDocument();
  });

  it("should render the list with correct classes and structure", () => {
    render(<RatesTabData />);

    const list = screen.getByRole("list");
    expect(list).toHaveClass("rates__list");

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);

    listItems.forEach((item) => {
      expect(item).toHaveClass("rates__item");
    });
  });
});
