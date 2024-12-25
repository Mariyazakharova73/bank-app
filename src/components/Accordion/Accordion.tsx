import React, { useState } from "react";
import Arrow from "../../assets/images/accordion-btn.svg";
import "./Accordion.scss";

interface AccordionItem {
  questionId: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ul className="accordion">
      {items.map((item, index) => (
        <li
          key={item.questionId}
          className="accordion__item"
        >
          <div className="accordion__title">
            <p className="">{item.question}</p>
            <button
              className={`accordion__btn ${activeIndex === index ? "accordion__btn--active" : ""}`}
              onClick={() => toggleItem(index)}
            >
              <img
                className="accordion__arrow"
                src={Arrow}
                alt="Стрелка"
              ></img>
            </button>
          </div>
          <div
            className={`accordion__content ${activeIndex === index ? "accordion__content--expanded" : ""}`}
          >
            <p>{item.answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
