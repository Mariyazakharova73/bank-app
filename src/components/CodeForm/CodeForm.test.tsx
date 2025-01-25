import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Mock, vi } from "vitest";
import { useDocStore } from "../../store/DocStore";
import { useScoringStore } from "../../store/ScoringStore";
import CodeForm from "./CodeForm";

vi.mock("../../store/DocStore", () => ({
  useDocStore: vi.fn(),
}));

vi.mock("../../store/ScoringStore", () => ({
  useScoringStore: vi.fn(),
}));

const mockedUseScoringStore = useScoringStore as unknown as Mock;
const mockedUseDocStoreStore = useDocStore as unknown as Mock;

describe("CodeForm component", () => {
  const mockSendSESCode = vi.fn();
  const mockGetAppStatus = vi.fn();

  beforeEach(() => {
    mockedUseDocStoreStore.mockReturnValue({
      sendSESCode: mockSendSESCode,
      loading: { sendSESCode: false },
    });

    mockedUseScoringStore.mockReturnValue({
      appId: "1234",
      appStatus: { sesCode: "1234" },
      getAppStatus: mockGetAppStatus,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the form with 4 inputs", () => {
    render(<CodeForm />);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);
  });

  it("moves focus to the next input on character input", () => {
    render(<CodeForm />);

    const inputs = screen.getAllByRole("textbox");

    fireEvent.change(inputs[0], { target: { value: "1" } });
    expect(inputs[1]).toHaveFocus();
  });

  it("displays an error if the code is incorrect", async () => {
    render(<CodeForm />);

    const inputs = screen.getAllByRole("textbox");

    fireEvent.change(inputs[0], { target: { value: "9" } });
    fireEvent.change(inputs[1], { target: { value: "9" } });
    fireEvent.change(inputs[2], { target: { value: "9" } });
    fireEvent.change(inputs[3], { target: { value: "9" } });

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(() => {
      expect(screen.getByText("Invalid confirmation code")).toBeInTheDocument();
    });
  });

  it("calls sendSESCode with the correct code when the input is valid", async () => {
    render(<CodeForm />);

    const inputs = screen.getAllByRole("textbox");

    fireEvent.change(inputs[0], { target: { value: "1" } });
    fireEvent.change(inputs[1], { target: { value: "2" } });
    fireEvent.change(inputs[2], { target: { value: "3" } });
    fireEvent.change(inputs[3], { target: { value: "4" } });

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(() => {
      expect(mockSendSESCode).toHaveBeenCalledWith("1234", 1234);
    });
  });
});
