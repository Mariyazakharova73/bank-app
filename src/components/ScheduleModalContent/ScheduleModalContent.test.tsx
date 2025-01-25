import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, Mock, vi } from "vitest";
import { useScoringStore } from "../../store/ScoringStore";
import ScheduleModalContent from "./ScheduleModalContent";

vi.mock("../../store/ScoringStore", () => ({
  useScoringStore: vi.fn(),
}));

const mockedUseScoringStore = useScoringStore as unknown as Mock;

describe("ScheduleModalContent", () => {
  it("renders the first modal step", () => {
    const mockOnClose = vi.fn();
    const mockSetModalStep = vi.fn();
    mockedUseScoringStore.mockReturnValue({
      denyApp: vi.fn(),
      appId: "12345",
      loading: { denyApp: false },
      error: { denyApp: null },
    });

    render(
      <MemoryRouter>
        <ScheduleModalContent
          modalStep={1}
          setModalStep={mockSetModalStep}
          onClose={mockOnClose}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText("You exactly sure, you want to cancel this application?")).toBeInTheDocument();

    const denyButton = screen.getByText("Deny");
    const cancelButton = screen.getByText("Cancel");

    expect(denyButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("calls onClose when Cancel is clicked", () => {
    const mockOnClose = vi.fn();
    const mockSetModalStep = vi.fn();
    mockedUseScoringStore.mockReturnValue({
      denyApp: vi.fn(),
      appId: "12345",
      loading: { denyApp: false },
      error: { denyApp: null },
    });

    render(
      <MemoryRouter>
        <ScheduleModalContent
          modalStep={1}
          setModalStep={mockSetModalStep}
          onClose={mockOnClose}
        />
      </MemoryRouter>,
    );

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls denyApp and sets modal step to 2 when Deny is clicked", () => {
    const mockOnClose = vi.fn();
    const mockSetModalStep = vi.fn();
    const mockDenyApp = vi.fn();

    mockedUseScoringStore.mockReturnValue({
      denyApp: mockDenyApp,
      appId: "12345",
      loading: { denyApp: false },
      error: { denyApp: null },
    });

    render(
      <MemoryRouter>
        <ScheduleModalContent
          modalStep={1}
          setModalStep={mockSetModalStep}
          onClose={mockOnClose}
        />
      </MemoryRouter>,
    );

    const denyButton = screen.getByText("Deny");
    fireEvent.click(denyButton);

    expect(mockSetModalStep).toHaveBeenCalledWith(2);
    expect(mockDenyApp).toHaveBeenCalledWith("12345");
  });

  it("renders the second modal step", () => {
    const mockOnClose = vi.fn();
    const mockSetModalStep = vi.fn();
    mockedUseScoringStore.mockReturnValue({
      denyApp: vi.fn(),
      appId: "12345",
      loading: { denyApp: false },
      error: { denyApp: null },
    });

    render(
      <MemoryRouter>
        <ScheduleModalContent
          modalStep={2}
          setModalStep={mockSetModalStep}
          onClose={mockOnClose}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText("Your application has been deny!")).toBeInTheDocument();

    const goHomeButton = screen.getByText("Go home");
    expect(goHomeButton).toBeInTheDocument();
  });
});
