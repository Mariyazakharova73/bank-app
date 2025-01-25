import { render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import { usePrescoringStore } from "../../store/PrescoringStore";
import PrescoringForm from "./PrescoringForm";

vi.mock("../../store/PrescoringStore", () => ({
  usePrescoringStore: vi.fn().mockReturnValue({
    submitPrescoring: vi.fn(),
    loading: { submitPrescoring: false },
    error: { submitPrescoring: null },
  }),
}));

const mockedUsePrescoringStore = usePrescoringStore as unknown as Mock;

describe("PrescoringForm", () => {
  it("renders the PrescoringForm correctly", () => {
    mockedUsePrescoringStore.mockReturnValue({
      submitPrescoring: vi.fn(),
      loading: { submitPrescoring: false },
      error: { submitPrescoring: null },
    });

    render(<PrescoringForm />);
    expect(screen.getByText("Customize your card")).toBeInTheDocument();
    expect(screen.getByText("Step 1 of 5")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("10 000 - 1 000 000")).toBeInTheDocument();
  });

  it("should show loading spinner when form is being submitted", async () => {
    mockedUsePrescoringStore.mockReturnValue({
      submitPrescoring: vi.fn(),
      loading: { submitPrescoring: true },
      error: { submitPrescoring: null },
    });

    render(<PrescoringForm />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should show error message when form submission fails", async () => {
    mockedUsePrescoringStore.mockReturnValue({
      submitPrescoring: vi.fn(),
      loading: { submitPrescoring: false },
      error: { submitPrescoring: "An error occurred" },
    });

    render(<PrescoringForm />);
    expect(screen.getByText("An error occurred")).toBeInTheDocument();
  });
});
