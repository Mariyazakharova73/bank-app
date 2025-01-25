import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox Component", () => {
  it("renders correctly", () => {
    render(
      <Checkbox
        value={false}
        onChange={() => {}}
        name="checkbox"
      />,
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("displays label text if provided", () => {
    render(
      <Checkbox
        value={false}
        onChange={() => {}}
        name="checkbox"
        label="Accept terms"
      />,
    );

    const label = screen.getByText("Accept terms");
    expect(label).toBeInTheDocument();
  });

  it("does not display label text if not provided", () => {
    render(
      <Checkbox
        value={false}
        onChange={() => {}}
        name="checkbox"
      />,
    );

    const label = screen.queryByText("Accept terms");
    expect(label).not.toBeInTheDocument();
  });

  it("fires onChange callback with correct value when clicked", () => {
    const handleChange = vi.fn();
    let value = false;

    const { rerender } = render(
      <Checkbox
        value={value}
        onChange={(newValue) => {
          value = newValue;
          handleChange(newValue);
        }}
        name="checkbox"
      />,
    );

    const checkbox = screen.getByRole("checkbox");

    // checkbox выключен
    expect(checkbox).not.toBeChecked();

    // вызовется onChange с true
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);

    // рендер с новым значением
    rerender(
      <Checkbox
        value={true}
        onChange={(newValue) => {
          value = newValue;
          handleChange(newValue);
        }}
        name="checkbox"
      />,
    );

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it("displays error message if error prop is provided", () => {
    render(
      <Checkbox
        value={false}
        onChange={() => {}}
        name="checkbox"
        error="This field is required"
      />,
    );

    const errorMessage = screen.getByText("This field is required");
    expect(errorMessage).toBeInTheDocument();
  });

  it("correctly sets the checkbox state based on the value prop", () => {
    const { rerender } = render(
      <Checkbox
        value={true}
        onChange={() => {}}
        name="checkbox"
      />,
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();

    rerender(
      <Checkbox
        value={false}
        onChange={() => {}}
        name="checkbox"
      />,
    );
    expect(checkbox).not.toBeChecked();
  });
});
