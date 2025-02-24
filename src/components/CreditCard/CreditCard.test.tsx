import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Mock, vi } from "vitest";
import { useDocStore } from "../../store/DocStore";
import { useScoringStore } from "../../store/ScoringStore";
import { CreditStatus } from "../../types/types";
import CreditCard from "./CreditCard";

vi.mock("../../store/ScoringStore", () => ({
  useScoringStore: vi.fn(),
}));

vi.mock("../../store/DocStore", () => ({
  useDocStore: vi.fn(),
}));

const mockedUseScoringStore = useScoringStore as unknown as Mock;
const mockedUseDocStoreStore = useDocStore as unknown as Mock;

const mockScoringStore: {
  appId: string | null;
  appStatus: {
    status: CreditStatus;
  } | null;
  getAppStatus: (id: string) => void;
} = {
  appId: null,
  appStatus: null,
  getAppStatus: vi.fn(),
};

const mockDocStore = {
  signSuccess: false,
};

describe("CreditCard component", () => {
  beforeEach(() => {
    mockedUseScoringStore.mockReturnValue(mockScoringStore);
    mockedUseDocStoreStore.mockReturnValue(mockDocStore);
  });

  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <CreditCard />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Platinum digital credit card/i)).toBeInTheDocument();
  });

  it("renders the credit card description", () => {
    render(
      <MemoryRouter>
        <CreditCard />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(/Our best credit card. Suitable for everyday spending and shopping/i),
    ).toBeInTheDocument();
  });

  it("renders the apply button when appId is null", () => {
    render(
      <MemoryRouter>
        <CreditCard />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Apply for card/i)).toBeInTheDocument();
  });

  it("renders the continue registration button when appId and appStatus are set", () => {
    mockScoringStore.appId = "123";
    mockScoringStore.appStatus = { status: CreditStatus.APPROVED };

    render(
      <MemoryRouter>
        <CreditCard />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Continue registration/i)).toBeInTheDocument();
  });

  it("renders the credit card data list", () => {
    render(
      <MemoryRouter>
        <CreditCard />
      </MemoryRouter>,
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });
});
