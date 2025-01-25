import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
  it("does not render the modal when `isOpen` is false", () => {
    render(
      <Modal
        isOpen={false}
        onClose={() => {}}
        title="Hidden Modal"
      >
        <p>Modal content</p>
      </Modal>,
    );

    const title = screen.queryByText("Hidden Modal");
    expect(title).not.toBeInTheDocument();
  });

  it("renders the modal when `isOpen` is true", () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        title="Visible Modal"
      >
        <p>Modal content</p>
      </Modal>,
    );

    const title = screen.getByText("Visible Modal");
    expect(title).toBeInTheDocument();
  });

  it("closes the modal when clicking outside the content", () => {
    const onCloseMock = vi.fn();

    render(
      <Modal
        isOpen={true}
        onClose={onCloseMock}
        title="Closable Modal"
      >
        <p>Modal content</p>
      </Modal>,
    );

    const modalOverlay = screen.getByRole("dialog");
    modalOverlay.click();

    expect(onCloseMock).toHaveBeenCalled();
  });
});
