import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

const MOCK_ITEMS = [
  {
    questionId: 1,
    question: "What is your name?",
    answer: "My name is Accordion.",
  },
  {
    questionId: 2,
    question: "What is your purpose?",
    answer: "To organize content.",
  },
];

describe("Accordion component", () => {
  it("renders all items", () => {
    render(<Accordion items={MOCK_ITEMS} />);

    const questions = screen.getAllByText(/What is your/i);
    expect(questions.length).toBe(MOCK_ITEMS.length);
  });

  it("displays the correct answer in the correct order", () => {
    render(<Accordion items={MOCK_ITEMS} />);

    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[0]);
    expect(screen.getByText("My name is Accordion.")).toBeInTheDocument();

    fireEvent.click(buttons[1]);
    expect(screen.getByText("To organize content.")).toBeInTheDocument();

    expect(screen.getByText("My name is Accordion.")).toBeInTheDocument();
    expect(screen.getByText("To organize content.")).toBeInTheDocument();
  });

  it("applies correct classes to active items", () => {
    render(<Accordion items={MOCK_ITEMS} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons[0]).not.toHaveClass("accordion__btn--active");

    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveClass("accordion__btn--active");

    fireEvent.click(buttons[0]);
    expect(buttons[0]).not.toHaveClass("accordion__btn--active");
  });
});
