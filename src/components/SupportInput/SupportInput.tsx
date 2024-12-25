import { ChangeEvent, useState } from "react";
import { subscribeToBankNews } from "../../api/mainApi";
import emailImg from "../../assets/images/support-email.svg";
import sendImg from "../../assets/images/support-send.svg";
import { LS_KEY_SUBSCRIBE } from "../../utils/constants/constants";
import Loader from "../Loader/Loader";
import "./SupportInput.scss";

export interface SupportInputProps {
  onSuccess: () => void;
}

const SupportInput = (props: SupportInputProps) => {
  const { onSuccess } = props;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      await subscribeToBankNews(email);
      localStorage.setItem(LS_KEY_SUBSCRIBE, "true");
      onSuccess();
    } catch (err) {
      setError("Ошибка при подписке на новости");
    } finally {
      setLoading(false);
    }
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (error) return <p>{error}</p>;

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
          value={email}
          onChange={onChangeEmail}
          className="subscribe-form__input"
          placeholder="Your email"
          aria-label="Email address"
        />
      </div>
      <button
        className="subscribe-form__button"
        type="button"
        onClick={handleSubscribe}
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
