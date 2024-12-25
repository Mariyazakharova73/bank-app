import { RATES_CARD_DATA } from "../../utils/constants/credit-card";
import "./RatesTabData.scss";
const RatesTabData = () => {
  return (
    <ul className="rates__list">
      {RATES_CARD_DATA.map((item) => (
        <li
          key={item.id}
          className="rates__item"
        >
          <p className="rates__item-label">{item.label}</p>
          <div>
            {item.value.map((value) => (
              <p
                key={value}
                className="rates__item-text"
              >
                {value}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RatesTabData;
