import { FC } from "react";
import "./Circle.scss";

export interface CircleProps {
  isSuccess: boolean;
}

const Circle: FC<CircleProps> = ({ isSuccess }) => {
  const circleClass = `circle ${isSuccess ? "circle--success" : "circle--error"}`;

  return (
    <span
      className={circleClass}
      role="status"
    ></span>
  );
};

export default Circle;
