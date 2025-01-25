import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, Mock, vi } from "vitest";
import { useScoringStore } from "../../store/ScoringStore";
import { CreditStatus } from "../../types/types";
import ScoringWaitDes from "./ScoringWaitDes";

vi.mock("../../store/ScoringStore", () => ({
  useScoringStore: vi.fn(),
}));

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockedUseScoringStore = useScoringStore as unknown as Mock;

describe("Component ScoringWaitDes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("render ScoringWaitDes and SubmitInfo", () => {
    mockedUseScoringStore.mockReturnValue({
      appStatus: null,
      appId: null,
      getAppStatus: vi.fn(),
      denyOffer: vi.fn(),
    });

    render(
      <MemoryRouter>
        <ScoringWaitDes />
      </MemoryRouter>,
    );

    expect(screen.getByText("Wait for a decision on the application")).toBeInTheDocument();
    expect(screen.getByText("The answer will come to your mail within 10 minutes")).toBeInTheDocument();
  });

  it("clear timeout on unmount", () => {
    const clearTimeoutSpy = vi.spyOn(global, "clearTimeout");

    const { unmount } = render(
      <MemoryRouter>
        <ScoringWaitDes />
      </MemoryRouter>,
    );

    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });

  it("should not navigate or denyOffer if appStatus is not CC_DENIED", async () => {
    const mockDenyOffer = vi.fn();
    const mockGetAppStatus = vi.fn();

    mockedUseScoringStore.mockReturnValue({
      appStatus: { status: CreditStatus.CC_APPROVED },
      appId: "12345",
      getAppStatus: mockGetAppStatus,
      denyOffer: mockDenyOffer,
    });

    render(
      <MemoryRouter>
        <ScoringWaitDes />
      </MemoryRouter>,
    );

    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockDenyOffer).not.toHaveBeenCalled();
  });
});
