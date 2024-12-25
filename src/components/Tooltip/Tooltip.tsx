import { FC, PropsWithChildren } from "react";
import "./Tooltip.scss";

interface TooltipProps {
  text: string;
}

const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ text, children }) => {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltip__text">{text}</div>
    </div>
  );
};

export default Tooltip;
