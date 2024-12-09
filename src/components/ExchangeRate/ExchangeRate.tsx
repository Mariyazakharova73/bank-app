import bankImg from "../../assets/images/exchange-bank.png";
import { CURRENCY_LIST } from "../../utils/constants";
import Button, { ButtonTheme } from "../Button/Button";
import SectionTitle, { TitleTheme } from "../SectionTitle/SectionTitle";
import "./ExchangeRate.scss";

const ExchangeRate = () => {
  return (
    <section className="exchange-rate">
      <div className="exchange-rate__block">
        <div className="exchange-rate__heading">
          <SectionTitle theme={TitleTheme.LIGHT}>Exchange rate in internet bank</SectionTitle>
          <p className="exchange-rate__subtitle">Update every 15 minutes, MSC 09.08.2022</p>
        </div>

        <div className="exchange-rate__content">
          <div>
            <h3 className="exchange-rate__currency-title">Currency</h3>
            <ul className="exchange-rate__list">
              {CURRENCY_LIST.map((item) => (
                <li
                  key={item.label}
                  className="exchange-rate__item"
                >
                  <span className="exchange-rate__item-label">{item.label}:</span>
                  {item.value}
                </li>
              ))}
            </ul>
            <Button
              className="exchange-rate__btn"
              theme={ButtonTheme.TEXT}
            >
              All courses
            </Button>
          </div>
          <img
            className="exchange-rate__img"
            src={bankImg}
            alt="Банк"
          />
        </div>
      </div>
    </section>
  );
};

export default ExchangeRate;
