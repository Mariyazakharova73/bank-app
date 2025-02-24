import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SubmitInfo from "../SubmitInfo/SubmitInfo";
import SignStatus from "./SignStatus";

const TITLE = "Documents have been successfully signed and sent for approval";
const TEXT = "Within 10 minutes you will be sent a PIN code to your email for confirmation";

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

describe("SignStatus Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the SignStatus component correctly", () => {
    render(<SignStatus />);
    expect(screen.getByText(new RegExp(TITLE, "i"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(TEXT, "i"))).toBeInTheDocument();
  });

  it("passes the correct props to SubmitInfo", () => {
    render(<SignStatus />);

    expect(SubmitInfo).toHaveBeenCalledWith(
      expect.objectContaining({
        title: TITLE,
        text: TEXT,
      }),
      expect.anything(),
    );
  });

  it("renders only one SubmitInfo component", () => {
    render(<SignStatus />);
    expect(SubmitInfo).toHaveBeenCalledTimes(1);
  });
});
