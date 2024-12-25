import { RECEIVING_CARD_DATA, USING_CARD_DATA } from "../../utils/constants/credit-card";
import Accordion from "../Accordion/Accordion";
import "./FAQTabData.scss";

const FAQTabData = () => {
  return (
    <div className="faq">
      <div>
        <h2 className="faq__title">Issuing and receiving a card</h2>
        <Accordion items={RECEIVING_CARD_DATA} />
      </div>
      <div>
        <h2 className="faq__title">Using a credit card</h2>
        <Accordion items={USING_CARD_DATA} />
      </div>
    </div>
  );
};

export default FAQTabData;
