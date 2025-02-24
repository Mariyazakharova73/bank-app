import cn from "classnames";
import { FC } from "react";
import "./Divider.scss";

interface DividerProps {
  color?: string;
  size?: "small" | "medium" | "large";
  classNames?: string;
}

const Divider: FC<DividerProps> = ({ color = "rgba(128, 128, 128, 0.2)", size = "small", classNames }) => {
  const dividerClass = cn(classNames, "divider", `divider--${size}`);

  return (
    <div
      className={dividerClass}
      style={{
        backgroundColor: color,
      }}
      role="presentation"
    />
  );
};

export default Divider;
