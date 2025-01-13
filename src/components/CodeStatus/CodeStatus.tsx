import { useNavigate } from "react-router-dom";
import successImg from "../../assets/images/loan-offers.png";
import { RoutePath } from "../../routes";
import Button from "../Button/Button";
import SubmitInfo from "../SubmitInfo/SubmitInfo";
import "./CodeStatus.scss";

const CodeStatus = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate(RoutePath.main);
  };

  return (
    <section className="code-status">
      <img
        src={successImg}
        alt="Success"
        className="code-status__img"
      />
      <SubmitInfo
        title="Congratulations! You have completed your new credit card."
        text="Congratulations! You have completed your new credit card."
      />
      <Button onClick={goToHome}>View other offers of our bank</Button>
    </section>
  );
};

export default CodeStatus;
