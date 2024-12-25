import { GET_CARD_DATA } from "../../utils/constants/credit-card";
import Divider from "../Divider/Divider";
import "./GetCardSteps.scss";
const GetCardSteps = () => {
  return (
    <section className="get-card">
      <h2 className="get-card__title">How to get a card</h2>
      <ul className="get-card__list">
        {GET_CARD_DATA.map((item, index) => (
          <li
            key={index}
            className="get-card__item"
          >
            <div className="get-card__number-wrapper">
              <div className="get-card__item-number">{index + 1}</div>
              <Divider />
            </div>
            <p className="get-card__item-text">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GetCardSteps;
