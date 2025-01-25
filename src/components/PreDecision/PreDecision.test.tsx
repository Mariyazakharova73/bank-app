import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SubmitInfo from "../SubmitInfo/SubmitInfo";
import PreDecision from "./PreDecision";

const TITLE = "The preliminary decision has been sent to your email.";
const TEXT = "In the letter you can get acquainted with the preliminary decision on the credit card.";

vi.mock("../SubmitInfo/SubmitInfo", () => ({
  __esModule: true,
  default: vi.fn(({ title, text }) => {
    return (
      <div>
        {title} {text}
      </div>
    );
  }),
}));

describe("PreDecision Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the PreDecision component correctly", () => {
    render(<PreDecision />);
    expect(screen.getByText(new RegExp(TITLE, "i"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(TEXT, "i"))).toBeInTheDocument();
  });

  it("passes the correct props to SubmitInfo", () => {
    render(<PreDecision />);

    expect(SubmitInfo).toHaveBeenCalledWith(
      expect.objectContaining({
        title: TITLE,
        text: TEXT,
        withBorder: true,
      }),
      expect.anything(),
    );
  });

  it("renders only one SubmitInfo component", () => {
    render(<PreDecision />);
    expect(SubmitInfo).toHaveBeenCalledTimes(1);
  });
});
