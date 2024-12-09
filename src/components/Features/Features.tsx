import manImg from "../../assets/images/features-man.png";
import { FEATURES_LIST } from "../../utils/constants/constants";
import "./Features.scss";

const Features = () => {
  return (
    <section className="features">
      <div>
        <img
          className="features__img"
          src={manImg}
          alt="Человек работает за ноутбуком "
        />
      </div>
      <div className="features__content">
        <h2 className="features__title">We Provide Many Features You Can Use</h2>
        <p className="features__text">
          You can explore the features that we provide with fun and have their own functions each feature
        </p>
        <ul className="features__list">
          {FEATURES_LIST.map((feature) => (
            <li
              key={feature}
              className="features__list-item"
            >
              <div className="features__icon"></div>
              <p className="features__item-text">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
