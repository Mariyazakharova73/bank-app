import cn from "classnames";
import { FC } from "react";
import "./Card.scss";

export interface CardProps {
  cardData: { id: number; icon: string; title: string; text: string };
  theme?: CardTheme;
  className?: string;
}

export enum CardTheme {
  LIGHT = "light",
  DARK = "dark",
}

const Card: FC<CardProps> = ({ cardData, theme = CardTheme.LIGHT, className }) => {
  const { icon, title, text } = cardData;

  return (
    <li className={cn("card", `card--${theme}`, className)}>
      <div className="card__icon">
        <img
          src={icon}
          alt={title}
        />
      </div>

      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </li>
  );
};

export default Card;
