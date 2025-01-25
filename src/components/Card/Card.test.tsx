import { render, screen } from "@testing-library/react";
import Card, { CardTheme } from "./Card";

const MOCK_CARD_DATA = {
  id: 1,
  icon: "https://example.com/icon.svg",
  title: "Card Title",
  text: "Some description text for the card.",
};

describe("Card component", () => {
  it("renders card with given data", () => {
    render(<Card cardData={MOCK_CARD_DATA} />);

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Some description text for the card.")).toBeInTheDocument();
    expect(screen.getByAltText("Card Title")).toHaveAttribute("src", MOCK_CARD_DATA.icon);
  });

  it("applies the default theme when no theme is passed", () => {
    render(<Card cardData={MOCK_CARD_DATA} />);

    const cardElement = screen.getByRole("listitem");
    expect(cardElement).toHaveClass("card--light");
  });

  it("applies the dark theme when specified", () => {
    render(
      <Card
        cardData={MOCK_CARD_DATA}
        theme={CardTheme.DARK}
      />,
    );

    const cardElement = screen.getByRole("listitem");
    expect(cardElement).toHaveClass("card--dark");
  });
});
