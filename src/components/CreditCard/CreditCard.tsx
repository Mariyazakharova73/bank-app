import { useEffect } from "react";
import { Link } from "react-router-dom";
import cardImage1 from "../../assets/images/design-card1.jpg";
import { RoutePath } from "../../routes";
import { useDocStore } from "../../store/DocStore";
import { useScoringStore } from "../../store/ScoringStore";
import { CreditStatus } from "../../types/types";
import { CREDIT_CARD_DATA } from "../../utils/constants/loan";
import Tooltip from "../Tooltip/Tooltip";
import "./CreditCard.scss";

const CreditCard = () => {
  const { appId, appStatus, getAppStatus } = useScoringStore();
  const { signSuccess } = useDocStore();

  useEffect(() => {
    if (!appId) return;
    getAppStatus(appId);
  }, [appId, appStatus?.status, getAppStatus]);

  const getPath = (): string => {
    const basePath = `${RoutePath.loan}/${appId}`;

    const pathMapping: Record<string, string> = {
      [CreditStatus.APPROVED]: basePath,
      [CreditStatus.CC_APPROVED]: `${basePath}/document`,
      [CreditStatus.DOCUMENT_CREATED]: signSuccess ? `${basePath}/code` : `${basePath}/document/sign`,
      [CreditStatus.CLIENT_DENIED]: RoutePath.loan,
      [CreditStatus.CREDIT_ISSUED]: RoutePath.loan,
    };

    return pathMapping[appStatus?.status as CreditStatus] || basePath;
  };

  return (
    <section className="credit-card">
      <div className="credit-card__content">
        <h1 className="credit-card__title">Platinum digital credit card</h1>
        <p className="credit-card__text">
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and transfers
          without commission and interest.
        </p>
        <ul className="credit-card__list">
          {CREDIT_CARD_DATA.map((item) => (
            <li
              key={item.id}
              className="credit-card__list-item"
            >
              <p className="credit-card__item-title">{item.title}</p>
              <Tooltip text={item.tooltipText}>
                <p className="credit-card__item-text">{item.description}</p>
              </Tooltip>
            </li>
          ))}
        </ul>
        {appId && appStatus?.status !== CreditStatus.CREDIT_ISSUED ? (
          <Link
            to={getPath() || RoutePath.loan}
            className="credit-card__link"
          >
            Continue registration
          </Link>
        ) : (
          <a
            href="#application"
            className="credit-card__link"
          >
            Apply for card
          </a>
        )}
      </div>
      <img
        className="credit-card__img"
        src={cardImage1}
        alt="Кредитная карта"
      />
    </section>
  );
};

export default CreditCard;
