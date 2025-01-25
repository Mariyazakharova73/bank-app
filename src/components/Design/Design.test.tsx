import { render, screen } from "@testing-library/react";
import { CARD_IMAGES } from "../../utils/constants/constants";
import Design from "./Design";

describe("Design component", () => {
  it("renders the title correctly", () => {
    render(<Design />);

    expect(screen.getByText("Choose the design you like and apply for card right now")).toBeInTheDocument();
  });

  it("renders the button correctly", () => {
    render(<Design />);

    expect(screen.getByText("Choose the card")).toBeInTheDocument();
  });

  it("renders the correct number of card images", () => {
    render(<Design />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(CARD_IMAGES.length);

    expect(images[0]).toHaveAttribute("alt", CARD_IMAGES[0].alt);
  });
});
