import { tabs } from "../../utils/constants/loan";
import Tabs from "../Tabs/Tabs";
import "./CardInfo.scss";

const CardInfo = () => {
  return (
    <section className="card-info">
      <Tabs tabs={tabs} />
    </section>
  );
};

export default CardInfo;
