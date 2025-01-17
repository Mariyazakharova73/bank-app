import { CASHBACK_CARD_DATA } from "../../utils/constants/loan";
import { CardTheme } from "../Card/Card";
import CashBackCard from "../CashBackCard/CashBackCard";
import "./CashBackTabData.scss";

const CashBackTabData = () => {
  return (
    <ul className="cashback-cards">
      {CASHBACK_CARD_DATA.map((item, index) => (
        <CashBackCard
          key={item.id}
          cardData={item}
          theme={index % 2 === 0 ? CardTheme.LIGHT : CardTheme.DARK}
        />
      ))}
    </ul>
  );
};

export default CashBackTabData;
