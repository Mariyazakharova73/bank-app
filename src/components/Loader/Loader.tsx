import { FC } from "react";
import spinnerImage from "../../assets/images/spinner.png";
import "./Loader.scss";

const Loader: FC = () => {
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

export default Loader;
