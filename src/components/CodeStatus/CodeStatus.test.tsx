import { fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { vi } from "vitest";
import CodeStatus from "./CodeStatus";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe("CodeStatus component", () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    (useNavigate as ReturnType<typeof vi.fn>).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders success image", () => {
    render(<CodeStatus />);
    const image = screen.getByAltText("Success");
    expect(image).toBeInTheDocument();
  });

  it("renders success title and text", () => {
    render(<CodeStatus />);

    const successMessages = screen.getAllByText("Congratulations! You have completed your new credit card.");

    expect(successMessages.length).toBeGreaterThan(0);
  });

  it("navigates to the main page when the button is clicked", () => {
    render(<CodeStatus />);

    const button = screen.getByRole("button", {
      name: /view other offers of our bank/i,
    });

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
