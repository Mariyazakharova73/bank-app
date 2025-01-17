import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ScoringForm from "../../components/ScoringForm/ScoringForm";
import ScoringWaitDes from "../../components/ScoringWaitDec/ScoringWaitDes";
import { useScoringStore } from "../../store/ScoringStore";
import { LS_KEY_PRESCORING } from "../../utils/constants/constants";
import "./LoanAppId.scss";
const LoanAppId = () => {
  const { setAppId, submitSuccess, appStatus } = useScoringStore();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;
    setAppId(id);
    if (appStatus?.id === Number(id)) {
      localStorage.removeItem(LS_KEY_PRESCORING);
    }
  }, [appStatus?.id, id, setAppId]);

  return (
    <main className="container">
      {submitSuccess && appStatus?.status ? <ScoringWaitDes /> : <ScoringForm />}
    </main>
  );
};

export default LoanAppId;
