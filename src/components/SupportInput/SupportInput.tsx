import emailImg from "../../assets/images/support-email.svg";
import sendImg from "../../assets/images/support-send.svg";
import "./SupportInput.scss";

const SupportInput = () => {
  return (
    <form
      className="subscribe-form"
      name="supportForm"
    >
      <div className="subscribe-form__input-container">
        <img
          className="subscribe-form__icon"
          src={emailImg}
          alt="Электронная почта"
        />
        <input
          name="email"
          type="email"
          className="subscribe-form__input"
          placeholder="Your email"
          aria-label="Email address"
        />
      </div>
      <button
        className="subscribe-form__button"
        type="button"
      >
        <img
          className="subscribe-form__icon"
          src={sendImg}
          alt="Отправить"
        />
        Subscribe
      </button>
    </form>
  );
};

export default SupportInput;
