import { FC } from "react";
import Doc from "../../assets/images/loan-doc.png";
import "./PDFDownloadButton.scss";

interface PDFDownloadButtonProps {
  fileName: string;
  fileUrl: string;
}

const PDFDownloadButton: FC<PDFDownloadButtonProps> = ({ fileName, fileUrl }) => {
  if (!fileUrl) {
    return null;
  }

  return (
    <a
      href={fileUrl}
      download={fileName}
      className="pdf-btn"
      role="link"
      aria-label={fileName}
    >
      <div className="pdf-btn__img">
        <img
          src={Doc}
          alt="PDF"
        />
      </div>
      <span className="pdf-btn__text">{fileName}</span>
    </a>
  );
};

export default PDFDownloadButton;
