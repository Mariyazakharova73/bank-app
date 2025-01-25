import { fireEvent, render, screen } from "@testing-library/react";
import { PaymentSchedule } from "../../types/types";
import Table from "./Table";

const MOCK_DATA: PaymentSchedule[] = [
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

describe("Table component", () => {
  it("renders the table", () => {
    render(
      <Table
        tableData={MOCK_DATA}
        onSort={vi.fn()}
        getBtnClass={vi.fn().mockReturnValue("sort-btn")}
      />,
    );

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("renders table with correct number of rows", () => {
    render(
      <Table
        tableData={MOCK_DATA}
        onSort={vi.fn()}
        getBtnClass={vi.fn().mockReturnValue("sort-btn")}
      />,
    );

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(MOCK_DATA.length + 1);
  });
  it("calls onSort when header button is clicked", () => {
    const onSort = vi.fn();
    const getBtnClass = vi.fn().mockReturnValue("sort-btn");

    render(
      <Table
        tableData={MOCK_DATA}
        onSort={onSort}
        getBtnClass={getBtnClass}
      />,
    );

    const firstSortButton = screen.getAllByRole("button")[0];

    fireEvent.click(firstSortButton);

    expect(onSort).toHaveBeenCalledWith("number");
  });
});
