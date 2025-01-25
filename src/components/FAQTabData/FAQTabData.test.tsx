import { render, screen } from "@testing-library/react";
import FAQTabData from "./FAQTabData";

vi.mock("../../utils/constants/loan", () => ({
  RECEIVING_CARD_DATA: [
    { title: "How to apply for a card?", content: "You can apply online or in person." },
    { title: "How long does it take to receive the card?", content: "It takes up to 7 business days." },
  ],
  USING_CARD_DATA: [
    { title: "What is the credit limit?", content: "Your credit limit depends on your credit score." },
    { title: "How to make payments?", content: "You can make payments online or at a branch." },
  ],
}));

vi.mock("../Accordion/Accordion", () => {
  const MockAccordion = ({ items }: { items: { questionId: string; content: string; title: string }[] }) => (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );

  MockAccordion.displayName = "MockAccordion";

  return {
    default: MockAccordion,
  };
});

describe("FAQTabData component", () => {
  it("renders the correct titles", () => {
    render(<FAQTabData />);

    expect(screen.getByText("Issuing and receiving a card")).toBeInTheDocument();
    expect(screen.getByText("Using a credit card")).toBeInTheDocument();
  });

  it("renders the content of RECEIVING_CARD_DATA", () => {
    render(<FAQTabData />);

    expect(screen.getByText("How to apply for a card?")).toBeInTheDocument();
    expect(screen.getByText("You can apply online or in person.")).toBeInTheDocument();

    expect(screen.getByText("How long does it take to receive the card?")).toBeInTheDocument();
    expect(screen.getByText("It takes up to 7 business days.")).toBeInTheDocument();
  });

  it("renders the content of USING_CARD_DATA", () => {
    render(<FAQTabData />);

    expect(screen.getByText("What is the credit limit?")).toBeInTheDocument();
    expect(screen.getByText("Your credit limit depends on your credit score.")).toBeInTheDocument();

    expect(screen.getByText("How to make payments?")).toBeInTheDocument();
    expect(screen.getByText("You can make payments online or at a branch.")).toBeInTheDocument();
  });
});
