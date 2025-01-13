import { FC } from "react";
import "./SubmitInfo.scss";

interface SubmitInfoProps {
  title: string;
  text: string;
  withBorder?: boolean;
}

const SubmitInfo: FC<SubmitInfoProps> = ({ title, text, withBorder = false }) => {
  return (
    <div className={`submit-info ${withBorder ? "" : "submit-info--no-border"}`}>
      <h2 className="submit-info__title">{title}</h2>
      <p className="submit-info__text">{text}</p>
    </div>
  );
};

export default SubmitInfo;
