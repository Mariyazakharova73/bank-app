import cn from "classnames";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./Button.scss";

export enum BtnTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TEXT = "text",
}

export enum BtnSizes {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

export enum BtnRadius {
  DEFAULT = "radius_default",
  SMALL = "radius_small",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: BtnTheme;
  size?: BtnSizes;
  disabled?: boolean;
  radius?: BtnRadius;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    theme = BtnTheme.PRIMARY,
    size = BtnSizes.M,
    radius = BtnRadius.DEFAULT,
    disabled,
    type = "button",
    ...otherProps
  } = props;

  return (
    <button
      className={cn(
        "btn",
        `btn--${theme}`,
        `btn--${size}`,
        `btn--${radius}`,
        { "btn--disabled": disabled },
        className,
      )}
      disabled={disabled}
      {...otherProps}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
