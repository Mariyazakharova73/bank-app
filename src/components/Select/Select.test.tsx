import { render, screen } from "@testing-library/react";
import Select from "./Select";

const OPTIONS = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];

describe("Select component", () => {
  it("renders options correctly", () => {
    render(<Select options={OPTIONS} />);

    OPTIONS.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("renders an error message when error is provided", () => {
    const errorMessage = "This field is required";
    render(
      <Select
        options={[]}
        error={errorMessage}
      />,
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("does not show an error message when there is no error", () => {
    render(<Select options={[]} />);

    const errorMessage = screen.queryByText("This field is required");
    expect(errorMessage).toBeNull();
  });
});
