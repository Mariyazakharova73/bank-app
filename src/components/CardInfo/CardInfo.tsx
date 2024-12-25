import { tabs } from "../../utils/constants/credit-card";
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
