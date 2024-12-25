import CardInfo from "../components/CardInfo/CardInfo";
import CreditCard from "../components/CreditCard/CreditCard";
import InformationForm from "../components/Form/InformationForm";
import GetCardSteps from "../components/GetCardSteps/GetCardSteps";

const LoanPage = () => {
  return (
    <main className="container">
      <CreditCard />
      <CardInfo />
      <GetCardSteps />
      <InformationForm />
    </main>
  );
};

export default LoanPage;
