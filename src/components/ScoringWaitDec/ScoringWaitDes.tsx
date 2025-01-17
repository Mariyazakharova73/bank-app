import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../routes";
import { useScoringStore } from "../../store/ScoringStore";
import { CreditStatus } from "../../types/types";
import SubmitInfo from "../SubmitInfo/SubmitInfo";
import "./ScoringWaitDes.scss";

const TIME_OUT = 20000;

const ScoringWaitDes = () => {
  const { appStatus, appId, getAppStatus, denyOffer } = useScoringStore();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (appId) {
        getAppStatus(appId);
      }

      if (appStatus?.status === CreditStatus.CC_DENIED) {
        navigate(RoutePath.main);
        denyOffer();
      }
    }, TIME_OUT);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="scoring-wait-des">
      <SubmitInfo
        title="Wait for a decision on the application"
        text="The answer will come to your mail within 10 minutes"
      />
    </section>
  );
};

export default ScoringWaitDes;
