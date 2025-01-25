import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GET_CARD_DATA } from "../../utils/constants/loan";
import GetCardSteps from "./GetCardSteps";

describe("GetCardSteps Component", () => {
  it("should render the title correctly", () => {
    render(<GetCardSteps />);
    const title = screen.getByText("How to get a card");
    expect(title).toBeInTheDocument();
  });

  it("should render the correct number of steps based on GET_CARD_DATA", () => {
    render(<GetCardSteps />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(GET_CARD_DATA.length);
  });

  it("should display the correct step numbers", () => {
    render(<GetCardSteps />);
    GET_CARD_DATA.forEach((_, index) => {
      const stepNumber = screen.getByText(index + 1);
      expect(stepNumber).toBeInTheDocument();
    });
  });

  it("should display the correct step text from GET_CARD_DATA", () => {
    render(<GetCardSteps />);
    GET_CARD_DATA.forEach((stepText) => {
      const step = screen.getByText(stepText);
      expect(step).toBeInTheDocument();
    });
  });
});
