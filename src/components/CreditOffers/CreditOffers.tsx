import { v4 as uuidv4 } from "uuid";
import offerImg from "../../assets/images/loan-offers.png";
import { usePrescoringStore } from "../../store/PrescoringStore";
import { creditOffer } from "../../types/types";
import Button, { BtnRadius } from "../Button/Button";
import Circle from "../Circle/Circle";
import Loader from "../Loader/Loader";
import "./CreditOffers.scss";
const CreditOffers = () => {
  const { creditOffers, applyOffer, loading, error } = usePrescoringStore();

  const sortedOffers = creditOffers?.sort((a, b) => {
    if (a.rate !== b.rate) {
      return b.rate - a.rate; // по убыванию ставки
    }
    if (a.monthlyPayment !== b.monthlyPayment) {
      return b.monthlyPayment - a.monthlyPayment; // по убыванию ежемесячного платежа
    }
    return b.totalAmount - a.totalAmount; // по убыванию общей суммы
  });

  const submitOffer = (offer: creditOffer) => {
    applyOffer(offer);
  };

  if (loading.applyOffer)
    return (
      <div className="loading">
        <Loader />
      </div>
    );

  if (error.applyOffer)
    return (
      <div className="error">
        <p>{error.applyOffer}</p>
      </div>
    );

  return (
    <ul className="credit-offers">
      {sortedOffers?.map((item) => (
        <li
          key={uuidv4()}
          className="credit-offers__item"
        >
          <img
            className="credit-offers__img"
            src={offerImg}
            alt="Offer"
          />
          <p className="credit-offers__req">Requested amount: {item.requestedAmount} ₽</p>
          <p>Total amount: {item.totalAmount} ₽</p>
          <p className="credit-offers__term">For {item.term} months</p>
          <p>Monthly payment: {item.monthlyPayment} ₽</p>
          <p className="credit-offers__your-rate">Your rate: {item.rate} %</p>
          <div className="credit-offers__badge">
            <p>Insurance included</p> <Circle isSuccess={item.isInsuranceEnabled} />
          </div>
          <div className="credit-offers__badge">
            <p>Salary client</p> <Circle isSuccess={item.isSalaryClient} />
          </div>
          <Button
            className="credit-offers__btn"
            radius={BtnRadius.SMALL}
            onClick={() => submitOffer(item)}
          >
            Select
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default CreditOffers;
