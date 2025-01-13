import { useEffect, useState } from "react";
import { fetchCurrencyRates } from "../../api/currencyApi";
import bankImg from "../../assets/images/exchange-bank.png";
import { ConversionRates } from "../../types/apiTypes";
import { CURRENCIES, TARGET_CURRENCY } from "../../utils/constants/constants";
import { getMs } from "../../utils/helpers/helpers";
import Button, { BtnTheme } from "../Button/Button";
import Loader from "../Loader/Loader";
import SectionTitle, { TitleTheme } from "../SectionTitle/SectionTitle";
import "./ExchangeRate.scss";

const ExchangeRate = () => {
  const [currencyRates, setCurrencyRates] = useState<ConversionRates | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const filteredCurrencies = currencyRates
    ? Object.entries(currencyRates)
        .filter(([key]) => CURRENCIES.includes(key))
        .map(([key, value]) => ({ label: key, value: (1 / value).toFixed(2) }))
    : [];

  useEffect(() => {
    const fetchCurrency = async () => {
      setLoading(true);
      try {
        const rates = await fetchCurrencyRates(TARGET_CURRENCY);
        setCurrencyRates(rates.conversion_rates);
      } catch (err) {
        setError("Error loading currencies");
      } finally {
        setLoading(false);
      }
    };

    const intervalId = setInterval(fetchCurrency, getMs(15));
    fetchCurrency();

    return () => clearInterval(intervalId);
  }, []);

  const renderContent = () => {
    if (loading) return <Loader />;
    if (error) return <p>{error}</p>;
    if (filteredCurrencies.length) {
      return (
        <ul className="exchange-rate__list">
          {filteredCurrencies.map((item) => (
            <li
              key={item.label}
              className="exchange-rate__item"
            >
              <span className="exchange-rate__item-label">{item.label}:</span>
              {item.value}
            </li>
          ))}
        </ul>
      );
    }
    return <p>Нет данных для отображения</p>;
  };

  return (
    <section className="exchange-rate">
      <div className="exchange-rate__block">
        <div className="exchange-rate__heading">
          <SectionTitle theme={TitleTheme.LIGHT}>Exchange rate in internet bank</SectionTitle>
          <p className="exchange-rate__subtitle">Update every 15 minutes, MSC 09.08.2022</p>
        </div>

        <div className="exchange-rate__content">
          <div>
            <h3 className="exchange-rate__currency-title">Currency</h3>
            {renderContent()}
            <Button
              className="exchange-rate__btn"
              theme={BtnTheme.TEXT}
            >
              All courses
            </Button>
          </div>
          <img
            className="exchange-rate__img"
            src={bankImg}
            alt="Банк"
          />
        </div>
      </div>
    </section>
  );
};

export default ExchangeRate;
