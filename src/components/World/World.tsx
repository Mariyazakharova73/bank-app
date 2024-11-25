import worldImage from "../../assets/images/world.png";
import SectionTitle, { TitlePosition, TitleTheme } from "../SectionTitle/SectionTitle";
import "./World.scss";

const World = () => {
  return (
    <section className="world">
      <SectionTitle
        theme={TitleTheme.MEDIUM}
        position={TitlePosition.CENTER}
      >
        You can use our services anywhere in the world
      </SectionTitle>
      <p className="world__text">Withdraw and transfer money online through our application</p>
      <img
        className="world__img"
        src={worldImage}
        alt="Карта мира"
      />
    </section>
  );
};

export default World;
