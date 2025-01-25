import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { useDocStore } from "../../store/DocStore";
import { useScoringStore } from "../../store/ScoringStore";
import Schedule from "./Schedule";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

vi.mock("../../store/DocStore", () => ({
  useDocStore: vi.fn(),
}));

vi.mock("../../store/ScoringStore", () => ({
  useScoringStore: vi.fn(),
}));

const mockedUseScoringStore = useScoringStore as unknown as Mock;
const mockedUseDocStoreStore = useDocStore as unknown as Mock;

describe("Schedule Component", () => {
  const mockCreateDocuments = vi.fn();
  beforeEach(() => {
    mockedUseDocStoreStore.mockReturnValue({
      createDocuments: mockCreateDocuments,
      loading: { createDocuments: false },
      error: { createDocuments: null },
    });

    mockedUseScoringStore.mockReturnValue({
      appId: "12345",
    });
  });

  it("renders correctly", () => {
    render(<Schedule />);
    expect(screen.getByText("Payment Schedule")).toBeInTheDocument();
    expect(screen.getByText("Step 3 of 5")).toBeInTheDocument();
  });

  it("submits the form when valid", async () => {
    render(<Schedule />);
    const checkbox = screen.getByLabelText("I agree with the payment schedule");
    const submitButton = screen.getByText("Send");
    expect(submitButton).toBeDisabled();

    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => expect(mockCreateDocuments).toHaveBeenCalledWith("12345"));
  });

  it("displays error message when there is an error", () => {
    mockedUseDocStoreStore.mockReturnValueOnce({
      createDocuments: vi.fn(),
      loading: { createDocuments: false },
      error: { createDocuments: "An error occurred" },
    });

    render(<Schedule />);

    expect(screen.getByText("An error occurred")).toBeInTheDocument();
  });
});
