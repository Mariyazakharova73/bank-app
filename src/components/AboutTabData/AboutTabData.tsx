import { ABOUT_CARD_DATA } from "../../utils/constants/credit-card";
import Card, { CardTheme } from "../Card/Card";
import "./AboutTabData.scss";

const AboutTabData = () => {
  return (
    <ul className="cards">
      <Card
        className="cards__item--1"
        key={ABOUT_CARD_DATA[0].id}
        cardData={ABOUT_CARD_DATA[0]}
      />
      <Card
        className="cards__item--2"
        key={ABOUT_CARD_DATA[1].id}
        cardData={ABOUT_CARD_DATA[1]}
        theme={CardTheme.DARK}
      />
      <Card
        className="cards__item--3"
        key={ABOUT_CARD_DATA[2].id}
        cardData={ABOUT_CARD_DATA[2]}
      />
      <Card
        className="cards__item--4"
        key={ABOUT_CARD_DATA[3].id}
        cardData={ABOUT_CARD_DATA[3]}
        theme={CardTheme.DARK}
      />
      <Card
        className="cards__item--5"
        key={ABOUT_CARD_DATA[4].id}
        cardData={ABOUT_CARD_DATA[4]}
      />
    </ul>
  );
};

export default AboutTabData;
