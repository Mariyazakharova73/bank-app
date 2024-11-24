import { CARD_IMAGES } from "../../utils/constants";
import Button from "../Button/Button";
import "./design.scss";

const Design = () => {
  return (
    <section className="design">
      <div className="design__title-wrapper">
        <h1 className="design__title">Choose the design you like and apply for card right now</h1>
        <Button className="design__btn">Choose the card</Button>
      </div>
      <ul className="design__cards-list">
        {CARD_IMAGES.map((image) => (
          <li
            key={image.alt}
            className="design__list-item"
          >
            <img
              className="design__card-img"
              src={image.src}
              alt={image.alt}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Design;
