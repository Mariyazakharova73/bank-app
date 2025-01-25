import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SubmitInfo from "../SubmitInfo/SubmitInfo";
import DocsStatus from "./DocsStatus";

const TITLE = "Documents are formed";
const TEXT = "Documents for signing will be sent to your email";

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

describe("DocsStatus Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the DocsStatus component correctly", () => {
    render(<DocsStatus />);
    expect(screen.getByText(new RegExp(TITLE, "i"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(TEXT, "i"))).toBeInTheDocument();
  });

  it("passes the correct props to SubmitInfo", () => {
    render(<DocsStatus />);

    expect(SubmitInfo).toHaveBeenCalledWith(
      expect.objectContaining({
        title: TITLE,
        text: TEXT,
      }),
      expect.anything(),
    );
  });

  it("renders only one SubmitInfo component", () => {
    render(<DocsStatus />);
    expect(SubmitInfo).toHaveBeenCalledTimes(1);
  });
});
