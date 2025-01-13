import SubmitInfo from "../SubmitInfo/SubmitInfo";
import "./SignStatus.scss";

const SignStatus = () => {
  return (
    <section className="sign-status">
      <div className="sign-status__wrapper">
        <SubmitInfo
          title="Documents have been successfully signed and sent for approval"
          text="Within 10 minutes you will be sent a PIN code to your email for confirmation"
        />
      </div>
    </section>
  );
};

export default SignStatus;
