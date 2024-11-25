import cn from "classnames";
import { HTMLAttributes, PropsWithChildren } from "react";
import "./SectionTitle.scss";

export enum TitleTheme {
  LIGHT = "light",
  MEDIUM = "medium",
  DARK = "dark",
}

export enum TitlePosition {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  theme?: TitleTheme;
  position?: TitlePosition;
}

const SectionTitle = (props: PropsWithChildren<TitleProps>) => {
  const {
    className,
    children,
    theme = TitleTheme.MEDIUM,
    position = TitlePosition.LEFT,
    ...otherProps
  } = props;

  return (
    <h2
      className={cn("section-title", `section-title--${theme}`, `section-title--${position}`, className)}
      {...otherProps}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
