import { fireEvent, render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import { usePrescoringStore } from "../../store/PrescoringStore";
import CreditOffers from "./CreditOffers";

vi.mock("../../store/PrescoringStore", () => ({
  usePrescoringStore: vi.fn(),
}));

const mockedUsePrescoringStore = usePrescoringStore as unknown as Mock;

const mockStore = {
  creditOffers: [
    {
      requestedAmount: 500000,
      totalAmount: 600000,
      term: 24,
      monthlyPayment: 25000,
      rate: 10,
      isInsuranceEnabled: true,
      isSalaryClient: false,
    },
    {
      requestedAmount: 300000,
      totalAmount: 350000,
      term: 12,
      monthlyPayment: 30000,
      rate: 8,
      isInsuranceEnabled: false,
      isSalaryClient: true,
    },
  ],
  applyOffer: vi.fn(),
  loading: { applyOffer: false },
  error: { applyOffer: null },
};

describe("CreditOffers component", () => {
  beforeEach(() => {
    mockedUsePrescoringStore.mockReturnValue(mockStore);
  });

  it("renders without crashing", () => {
    render(<CreditOffers />);
    expect(screen.getByText(/Requested amount: 500000 ₽/i)).toBeInTheDocument();
    expect(screen.getByText(/Requested amount: 300000 ₽/i)).toBeInTheDocument();
  });

  it("shows error message when error.applyOffer is set", () => {
    mockedUsePrescoringStore.mockReturnValue({
      ...mockStore,
      error: { applyOffer: "Something went wrong" },
    });

    render(<CreditOffers />);
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("sorts offers correctly", () => {
    render(<CreditOffers />);
    const offers = screen.getAllByText(/Requested amount/i);
    expect(offers[0]).toHaveTextContent("Requested amount: 500000 ₽");
    expect(offers[1]).toHaveTextContent("Requested amount: 300000 ₽");
  });

  it("calls applyOffer when 'Select' button is clicked", () => {
    render(<CreditOffers />);
    const selectButtons = screen.getAllByText(/Select/i);
    fireEvent.click(selectButtons[0]);

    expect(mockStore.applyOffer).toHaveBeenCalledWith(mockStore.creditOffers[0]);
  });

  it("renders all offers with correct details", () => {
    render(<CreditOffers />);

    expect(screen.getByText(/Requested amount: 500000 ₽/i)).toBeInTheDocument();
    expect(screen.getByText(/Total amount: 600000 ₽/i)).toBeInTheDocument();
    expect(screen.getByText(/Monthly payment: 25000 ₽/i)).toBeInTheDocument();
    expect(screen.getByText(/Your rate: 10 %/i)).toBeInTheDocument();
  });
});
