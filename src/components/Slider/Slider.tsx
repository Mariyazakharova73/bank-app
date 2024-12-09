import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import defaultImg from "../../assets/images/slider-default-article.jpg";
import prevImg from "../../assets/images/slider-left-btn.svg";
import nextImg from "../../assets/images/slider-right-btn.svg";
import useSliderConfig from "../../hooks/useSliderConfig";
import { Article } from "../../types/apiTypes";
import { CARD_WIDTH, HTML_TAG_REGEXP } from "../../utils/constants/slider";
import { calculateSliderMetrics } from "../../utils/helpers/slider";
import "./Slider.scss";

const Slider = ({ articles }: { articles: Article[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderConfig = useSliderConfig();

  const filterArticles = (articles: Article[]): Article[] => {
    const isValidDescription = (description: string | null) => {
      return description === null || description.trim() === "" || !HTML_TAG_REGEXP.test(description);
    };

    const doesNotContainRemoved = (article: Article): boolean => {
      const fieldsToCheck = [article.title, article.description, article.url, article.urlToImage];
      return !fieldsToCheck.some((field) => field?.includes("[Removed]"));
    };

    return articles.filter(
      (article) => doesNotContainRemoved(article) && isValidDescription(article.description),
    );
  };

  const filteredArticles = filterArticles(articles);

  const { scrollStep, maxOffset } = calculateSliderMetrics(filteredArticles.length, sliderConfig, CARD_WIDTH);

  const offset = currentIndex * scrollStep;
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = offset >= maxOffset;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, filteredArticles.length - sliderConfig.visibleCards),
    );
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    (event.target as HTMLImageElement).src = defaultImg;
  };

  return (
    <div className="slider">
      <div className="slider__viewport">
        <ul
          className="slider__track"
          style={{
            transform: `translateX(-${Math.min(offset, maxOffset)}px)`,
          }}
        >
          {filteredArticles?.map((article) => (
            <li
              className="slider__card"
              key={uuidv4()}
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="slider__link"
              >
                <img
                  src={article.urlToImage || defaultImg}
                  alt={article.title || "Статья"}
                  className="slider__image"
                  onError={handleImageError}
                />
                <h2 className="slider__title">{article.title}</h2>
                <p className="slider__description">{article.description || "Узнать подробнее..."}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="slider__btns">
        <button
          className="slider__btn slider__btn--prev"
          onClick={handlePrev}
          disabled={isPrevDisabled}
        >
          <img
            src={prevImg}
            alt="Назад"
          />
        </button>
        <button
          className="slider__btn slider__btn--next"
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          <img
            src={nextImg}
            alt="Вперед"
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
