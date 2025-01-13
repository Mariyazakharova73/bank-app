import CodeForm from "../../components/CodeForm/CodeForm";
import CodeStatus from "../../components/CodeStatus/CodeStatus";
import { useDocStore } from "../../store/DocStore";

const LoanCodePage = () => {
  const { codeSubmitSuccess } = useDocStore();

  return <main className="container">{codeSubmitSuccess ? <CodeStatus /> : <CodeForm />}</main>;
};

export default LoanCodePage;
