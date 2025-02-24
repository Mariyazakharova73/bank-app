import { render, screen } from "@testing-library/react";
import { ABOUT_CARD_DATA } from "../../utils/constants/loan";
import AboutTabData from "./AboutTabData";

describe("AboutTabData component", () => {
  it("renders the correct number of Card components", () => {
    render(<AboutTabData />);

    const cards = screen.getAllByRole("listitem");
    expect(cards).toHaveLength(ABOUT_CARD_DATA.length);
  });

  it("renders Card components with the correct data", () => {
    render(<AboutTabData />);

    expect(screen.getByText(ABOUT_CARD_DATA[0].title)).toBeInTheDocument();
    expect(screen.getByText(ABOUT_CARD_DATA[0].text)).toBeInTheDocument();
  });

  it("renders each Card component with the correct class based on theme", () => {
    render(<AboutTabData />);

    const card1 = document.querySelector(".cards__item--1");
    const card2 = document.querySelector(".cards__item--2");
    const card3 = document.querySelector(".cards__item--3");
    const card4 = document.querySelector(".cards__item--4");
    const card5 = document.querySelector(".cards__item--5");

    expect(card1).toHaveClass("cards__item--1");
    expect(card2).toHaveClass("cards__item--2");
    expect(card3).toHaveClass("cards__item--3");
    expect(card4).toHaveClass("cards__item--4");
    expect(card5).toHaveClass("cards__item--5");
  });
});
