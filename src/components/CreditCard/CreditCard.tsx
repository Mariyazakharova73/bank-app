import cardImage1 from "../../assets/images/design-card1.jpg";
import { CREDIT_CARD_DATA } from "../../utils/constants/credit-card";
import Tooltip from "../Tooltip/Tooltip";
import "./CreditCard.scss";

const CreditCard = () => {
  return (
    <section className="credit-card">
      <div className="credit-card__content">
        <h1 className="credit-card__title">Platinum digital credit card</h1>
        <p className="credit-card__text">
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and transfers
          without commission and interest.
        </p>
        <ul className="credit-card__list">
          {CREDIT_CARD_DATA.map((item) => (
            <li
              key={item.id}
              className="credit-card__list-item"
            >
              <p className="credit-card__item-title">{item.title}</p>
              <Tooltip text={item.tooltipText}>
                <p className="credit-card__item-text">{item.description}</p>
              </Tooltip>
            </li>
          ))}
        </ul>
        <a
          href="#prescoring-form"
          className="credit-card__link"
        >
          Apply for card
        </a>
      </div>
      <img
        className="credit-card__img"
        src={cardImage1}
        alt="Кредитная карта"
      />
    </section>
  );
};

export default CreditCard;
