import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Mock, vi } from "vitest";
import { useScoringStore } from "../../store/ScoringStore";
import ScoringForm from "./ScoringForm";

vi.mock("../../store/ScoringStore", () => ({
  useScoringStore: vi.fn(),
}));

vi.mock("./api", () => ({
  mockSubmitScoring: vi.fn(),
}));

const mockedUseScoringStore = useScoringStore as unknown as Mock;

describe("ScoringForm", () => {
  const mockSubmitScoring = vi.fn();
  const mockLoading = { submitScoring: false };
  const mockError = { submitScoring: null };

  beforeEach(() => {
    mockedUseScoringStore.mockReturnValue({
      submitScoring: mockSubmitScoring,
      loading: mockLoading,
      error: mockError,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the ScoringForm correctly", () => {
    render(
      <MemoryRouter>
        <ScoringForm />
      </MemoryRouter>,
    );

    expect(screen.getByText("Continuation of the application")).toBeInTheDocument();
    expect(screen.getByText("Step 2 of 5")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Continue/i })).toBeInTheDocument();
  });

  it("displays error message if submission fails", () => {
    mockedUseScoringStore.mockReturnValue({
      submitScoring: mockSubmitScoring,
      loading: mockLoading,
      error: { submitScoring: "Submission failed" },
    });

    render(
      <MemoryRouter>
        <ScoringForm />
      </MemoryRouter>,
    );

    expect(screen.getByText("Submission failed")).toBeInTheDocument();
  });

  it("disables submit button when form is submitting", () => {
    render(
      <MemoryRouter>
        <ScoringForm />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", { name: /Continue/i });
    fireEvent.click(button);

    expect(button).toBeDisabled();
  });
});
