import { useState } from "react";
import { LS_KEY_SUBSCRIBE } from "../../utils/constants/constants";
import SupportInput from "../SupportInput/SupportInput";
import "./Support.scss";

const Support = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(!!localStorage.getItem(LS_KEY_SUBSCRIBE));

  const handleSuccess = () => {
    setIsSubscribed(true);
  };
  return (
    <section className="support">
      <p className="support__accent-text">Support</p>
      <h2 className="support__title">Subscribe Newsletter & get</h2>
      <p className="support__text">Bank News</p>
      <div className="support__input-wrapper">
        {isSubscribed ? (
          <p>You are already subscribed to the bank&#39;s newsletter</p>
        ) : (
          <SupportInput onSuccess={handleSuccess} />
        )}
      </div>
    </section>
  );
};

export default Support;
