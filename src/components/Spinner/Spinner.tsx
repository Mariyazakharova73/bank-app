import React from "react";
import spinnerImage from "../../assets/images/spinner.png";
import "./Spinner.scss";

const Spinner: React.FC = () => {
  return (
    <div className="spinner">
      <img
        src={spinnerImage}
        alt="Spinner"
        className="spinner__image"
      />
    </div>
  );
};

export default Spinner;
