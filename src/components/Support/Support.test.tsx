import { render, screen } from "@testing-library/react";
import { describe, expect, it, MockedFunction, vi } from "vitest";
import Support from "./Support";

vi.stubGlobal("localStorage", {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
});

const mockedGetItem = localStorage.getItem as unknown as MockedFunction<typeof localStorage.getItem>;

describe("Support Component", () => {
  it("should render correctly with title and text", () => {
    render(<Support />);

    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Subscribe Newsletter & get")).toBeInTheDocument();
    expect(screen.getByText("Bank News")).toBeInTheDocument();
  });

  it("should show subscription success message if already subscribed", () => {
    mockedGetItem.mockReturnValue("true");

    render(<Support />);

    expect(screen.getByText("You are already subscribed to the bank's newsletter")).toBeInTheDocument();
  });

  it("should show the input form if not subscribed", () => {
    mockedGetItem.mockReturnValue(null);

    render(<Support />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
