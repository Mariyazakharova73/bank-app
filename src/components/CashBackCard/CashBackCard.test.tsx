import { render, screen } from "@testing-library/react";
import CashBackCard, { CardProps, CardTheme } from "./CashBackCard";

const MOCK_CARD_DATA: CardProps["cardData"] = {
  id: 1,
  title: "Cashback 5%",
  text: "Earn cashback on every purchase",
};

describe("CashBackCard component", () => {
  it("renders the card title and text", () => {
    render(<CashBackCard cardData={MOCK_CARD_DATA} />);

    const titleElement = screen.getByText(MOCK_CARD_DATA.title);
    expect(titleElement).toBeInTheDocument();

    const textElement = screen.getByText(MOCK_CARD_DATA.text);
    expect(textElement).toBeInTheDocument();
  });

  it("applies the correct theme class based on the theme prop", () => {
    const { container: lightContainer } = render(
      <CashBackCard
        cardData={MOCK_CARD_DATA}
        theme={CardTheme.LIGHT}
      />,
    );
    expect(lightContainer.firstChild).toHaveClass("cashback-card--light");

    const { container: darkContainer } = render(
      <CashBackCard
        cardData={MOCK_CARD_DATA}
        theme={CardTheme.DARK}
      />,
    );
    expect(darkContainer.firstChild).toHaveClass("cashback-card--dark");
  });

  it("applies additional className if provided", () => {
    const customClass = "custom-class";
    const { container } = render(
      <CashBackCard
        cardData={MOCK_CARD_DATA}
        className={customClass}
      />,
    );

    expect(container.firstChild).toHaveClass(customClass);
  });
});
