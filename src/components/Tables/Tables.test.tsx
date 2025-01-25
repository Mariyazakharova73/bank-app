import { fireEvent, render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import { useScoringStore } from "../../store/ScoringStore";
import Tables from "./Tables";

vi.mock("../../store/ScoringStore", () => ({
  useScoringStore: vi.fn(),
}));

const mockedUseScoringStore = useScoringStore as unknown as Mock;

const MOCK_DATA = [
  {
    number: 100,
    date: "2025-01-01",
    totalPayment: 200,
    interestPayment: 50,
    debtPayment: 100,
    remainingDebt: 50,
  },
  {
    number: 200,
    date: "2025-03-01",
    totalPayment: 500,
    interestPayment: 10,
    debtPayment: 150,
    remainingDebt: 80,
  },
];

describe("Tables component", () => {
  beforeEach(() => {
    mockedUseScoringStore.mockReturnValue({
      paymentSchedule: MOCK_DATA,
    });
  });

  it("correctly passes sorting buttons classes", () => {
    render(<Tables />);

    const sortButton = screen.getAllByRole("button")[0];
    const btnClass = sortButton.className;

    expect(btnClass).toContain("table__header-btn");
  });

  it("correctly toggles sorting direction on button click", () => {
    render(<Tables />);

    const sortButton = screen.getAllByRole("button")[0];
    const initialClass = sortButton.className;

    fireEvent.click(sortButton);

    const updatedClass = sortButton.className;

    expect(updatedClass).not.toBe(initialClass);
  });

  it("displays sorting buttons for each column", () => {
    render(<Tables />);

    const sortButtons = screen.getAllByRole("button");
    expect(sortButtons.length).toBeGreaterThan(0);
  });
});
