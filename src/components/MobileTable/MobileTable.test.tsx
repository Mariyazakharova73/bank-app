import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MobileTable, { MobileTableProps } from "./MobileTable";

const MOCK_TABLE_DATA = [
  {
    date: "2025-01-01",
    number: 1,
    totalPayment: 200,
    interestPayment: 50,
    debtPayment: 100,
    remainingDebt: 50,
  },
  {
    date: "2025-03-01",
    number: 2,
    totalPayment: 500,
    interestPayment: 10,
    debtPayment: 150,
    remainingDebt: 80,
  },
  {
    date: "2025-03-01",
    number: 2,
    totalPayment: 500,
    interestPayment: 10,
    debtPayment: 150,
    remainingDebt: 80,
  },
];

describe("MobileTable Component", () => {
  const mockOnSort = vi.fn();
  const mockGetBtnClass = vi.fn((key) => (key === "date" ? "active" : ""));

  const defaultProps: MobileTableProps = {
    tableData: MOCK_TABLE_DATA,
    onSort: mockOnSort,
    getBtnClass: mockGetBtnClass,
  };

  it("should call onSort with the correct key when a sort button is clicked", () => {
    render(<MobileTable {...defaultProps} />);

    const sortButtons = screen.getAllByRole("button");

    fireEvent.click(sortButtons[0]);

    expect(mockOnSort).toHaveBeenCalledWith("date");
  });

  it("should display an empty state if tableData is null", () => {
    render(
      <MobileTable
        tableData={null}
        onSort={mockOnSort}
        getBtnClass={mockGetBtnClass}
      />,
    );

    const emptyState = screen.queryByRole("listitem");
    expect(emptyState).toBeNull();
  });

  it("should sort when a button is clicked", () => {
    render(<MobileTable {...defaultProps} />);

    const sortButtons = screen.getAllByRole("button");
    expect(sortButtons.length).toBeGreaterThan(0);

    const firstButton = sortButtons[0];
    firstButton.click();

    expect(mockOnSort).toHaveBeenCalledWith("date");
  });
});
