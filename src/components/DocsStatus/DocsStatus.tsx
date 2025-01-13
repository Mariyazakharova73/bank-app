import SubmitInfo from "../SubmitInfo/SubmitInfo";
import "./DocsStatus.scss";

const DocsStatus = () => {
  return (
    <section className="scoring-wait-des">
      <SubmitInfo
        title="Documents are formed"
        text="Documents for signing will be sent to your email"
      />
    </section>
  );
};

export default DocsStatus;
