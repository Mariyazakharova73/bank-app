import SubmitInfo from "../SubmitInfo/SubmitInfo";
import "./PreDecision.scss";

const PreDecision = () => {
  return (
    <section className="pre-decision">
      <SubmitInfo
        title="The preliminary decision has been sent to your email."
        text="In the letter you can get acquainted with the preliminary decision on the credit card."
        withBorder
      />
    </section>
  );
};

export default PreDecision;
