import cn from "classnames";
import { FC } from "react";
import "./CashBackCard.scss";

export interface CardProps {
  cardData: { id: number; title: string; text: string };
  theme?: CardTheme;
  className?: string;
}

export enum CardTheme {
  LIGHT = "light",
  DARK = "dark",
}

const CashBackCard: FC<CardProps> = ({ cardData, theme = CardTheme.LIGHT, className }) => {
  const { title, text } = cardData;

  return (
    <li className={cn("cashback-card", `cashback-card--${theme}`, className)}>
      <p className="cashback-card__text">{text}</p>
      <h3 className="cashback-card__title">{title}</h3>
    </li>
  );
};

export default CashBackCard;
