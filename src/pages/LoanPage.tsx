import CardInfo from "../components/CardInfo/CardInfo";
import CreditCard from "../components/CreditCard/CreditCard";
import CreditOffers from "../components/CreditOffers/CreditOffers";
import GetCardSteps from "../components/GetCardSteps/GetCardSteps";
import PreDecision from "../components/PreDecision/PreDecision";
import PrescoringForm from "../components/PrescoringForm/PrescoringForm";
import { usePrescoringStore } from "../store/PrescoringStore";

const LoanPage = () => {
  const { creditOffers, offerSelected } = usePrescoringStore();

  const content = offerSelected ? <PreDecision /> : <CreditOffers />;

  return (
    <main className="container">
      <CreditCard />
      <CardInfo />
      <GetCardSteps />
      <div id="application">{creditOffers ? content : <PrescoringForm />}</div>
    </main>
  );
};

export default LoanPage;
