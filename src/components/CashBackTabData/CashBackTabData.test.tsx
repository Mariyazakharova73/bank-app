import { render, screen } from "@testing-library/react";
import { CASHBACK_CARD_DATA } from "../../utils/constants/loan";
import CashBackTabData from "./CashBackTabData";

vi.mock("../../utils/constants/loan", () => ({
  CASHBACK_CARD_DATA: [
    { id: 1, title: "Card 1", text: "Text 1" },
    { id: 2, title: "Card 2", text: "Text 2" },
    { id: 3, title: "Card 3", text: "Text 3" },
  ],
}));

describe("CashBackTabData component", () => {
  it("renders a list of CashBackCard components", () => {
    render(<CashBackTabData />);

    const cards = screen.getAllByRole("listitem");
    expect(cards.length).toBe(CASHBACK_CARD_DATA.length);
  });

  it("passes correct data to each CashBackCard", () => {
    render(<CashBackTabData />);

    CASHBACK_CARD_DATA.forEach((item) => {
      const title = screen.getByText(item.title);
      const text = screen.getByText(item.text);

      expect(title).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  });

  it("alternates the theme between LIGHT and DARK", () => {
    render(<CashBackTabData />);

    const cards = screen.getAllByRole("listitem");
    cards.forEach((card, index) => {
      if (index % 2 === 0) {
        expect(card).toHaveClass("cashback-card--light");
      } else {
        expect(card).toHaveClass("cashback-card--dark");
      }
    });
  });
});
