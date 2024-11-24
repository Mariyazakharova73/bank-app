import cn from "classnames";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./button.scss";

export enum ButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum ButtonSizes {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSizes;
  disabled?: boolean;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSizes.M,
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      className={cn("btn", `btn--${theme}`, `btn--${size}`, { "btn--disabled": disabled }, className)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
