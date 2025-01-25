import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { subscribeToBankNews } from "../../api/mainApi";
import SupportInput from "./SupportInput";

vi.mock("../../api/mainApi", () => ({
  subscribeToBankNews: vi.fn(),
}));

describe("SupportInput", () => {
  it("should handle email input change", () => {
    render(<SupportInput onSuccess={vi.fn()} />);

    const emailInput = screen.getByLabelText("Email address");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput).toHaveValue("test@example.com");
  });

  it("should call onSuccess after successful subscription", async () => {
    const onSuccess = vi.fn();
    (subscribeToBankNews as ReturnType<typeof vi.fn>).mockResolvedValueOnce(undefined);
    render(<SupportInput onSuccess={onSuccess} />);

    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "test@example.com" } });
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => expect(onSuccess).toHaveBeenCalled());
  });

  it("should show error message when subscription fails", async () => {
    (subscribeToBankNews as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
      new Error("Error when subscribing to news"),
    );

    render(<SupportInput onSuccess={vi.fn()} />);

    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "test@example.com" } });
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => expect(screen.getByText("Error when subscribing to news")).toBeInTheDocument());
  });
});
