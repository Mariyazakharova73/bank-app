import { render, screen } from "@testing-library/react";
import PDFDownloadButton from "./PDFDownloadButton";

const MOCK_FILE_NAME = "Information on your card";
const MOCK_FILE_URL = "../../assets/doc/credit-card-offer.pdf";

describe("PDFDownloadButton Component", () => {
  it("renders the button with the correct file name and download link", () => {
    render(
      <PDFDownloadButton
        fileName={MOCK_FILE_NAME}
        fileUrl={MOCK_FILE_URL}
      />,
    );

    const linkElement = screen.getByRole("link", { name: MOCK_FILE_NAME });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", MOCK_FILE_URL);
    expect(linkElement).toHaveAttribute("download", MOCK_FILE_NAME);
  });

  it("renders the image correctly", () => {
    render(
      <PDFDownloadButton
        fileName={MOCK_FILE_NAME}
        fileUrl={MOCK_FILE_URL}
      />,
    );

    const imageElement = screen.getByAltText("PDF");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", expect.stringContaining("loan-doc.png"));
  });

  it("does not render anything if fileUrl is missing", () => {
    const { container } = render(
      <PDFDownloadButton
        fileName={MOCK_FILE_NAME}
        fileUrl=""
      />,
    );

    expect(container.firstChild).toBeNull();
  });
});
