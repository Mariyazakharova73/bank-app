import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("renders without errors", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("applies the correct class for error state", () => {
    render(
      <Input
        placeholder="Enter text"
        error="Error message"
      />,
    );
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveClass("input--error");
    const errorMessage = screen.getByText("Error message");
    expect(errorMessage).toBeInTheDocument();
  });

  it("applies the correct class for valid state", () => {
    render(
      <Input
        placeholder="Enter text"
        isValid={true}
      />,
    );
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveClass("input--success");
  });

  it("trims the input value on change", () => {
    const handleChange = vi.fn();
    render(
      <Input
        placeholder="Enter text"
        onChange={handleChange}
      />,
    );
    const input = screen.getByPlaceholderText("Enter text");

    fireEvent.change(input, { target: { value: "   test value   " } });
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "test value" }),
      }),
    );
  });

  it("displays the error message when error prop is provided", () => {
    render(
      <Input
        placeholder="Enter text"
        error="Error occurred"
      />,
    );
    const errorMessage = screen.getByText("Error occurred");
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders a success circle when isValid is true", () => {
    render(
      <Input
        placeholder="Enter text"
        isValid={true}
      />,
    );
    const circle = screen.getByRole("presentation", { hidden: true });
    expect(circle).toHaveClass("input-wrapper__circle--success");
  });

  it("renders an error circle when error is provided", () => {
    render(
      <Input
        placeholder="Enter text"
        error="Error occurred"
      />,
    );
    const circle = screen.getByRole("presentation", { hidden: true });
    expect(circle).toHaveClass("input-wrapper__circle--error");
  });
});
