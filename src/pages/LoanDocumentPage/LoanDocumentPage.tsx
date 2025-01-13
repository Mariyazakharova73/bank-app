import DocsStatus from "../../components/DocsStatus/DocsStatus";
import Schedule from "../../components/Schedule/Schedule";
import { useDocStore } from "../../store/DocStore";

const LoanDocumentPage = () => {
  const { scheduleSubmitSuccess } = useDocStore();
  return <main className="container">{scheduleSubmitSuccess ? <DocsStatus /> : <Schedule />}</main>;
};

export default LoanDocumentPage;
