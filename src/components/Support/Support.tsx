import SupportInput from "../SupportInput/SupportInput";
import "./Support.scss";

const Support = () => {
  return (
    <section className="support">
      <p className="support__accent-text">Support</p>
      <h2 className="support__title">Subscribe Newsletter & get</h2>
      <p className="support__text">Bank News</p>
      <div className="support__input-wrapper">
        <SupportInput />
      </div>
    </section>
  );
};

export default Support;
