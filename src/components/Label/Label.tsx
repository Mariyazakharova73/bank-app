import React, { PropsWithChildren } from "react";
import "./Label.scss";

type LabelProps = PropsWithChildren<{
  htmlFor: string;
  isRequired?: boolean;
}>;

const Label: React.FC<LabelProps> = ({ htmlFor, isRequired, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="label"
    >
      <p className="label__text">{children}</p>
      {isRequired && <span className="label__star">*</span>}
    </label>
  );
};

export default Label;
