import errorImg from "../../assets/images/404.png";
import Link from "../../components/Link/Link";
import { RoutePath } from "../../routes";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <main className="container">
      <section className="not-found">
        <div className="not-found__content">
          <h1 className="not-found__title">Oops....</h1>
          <h2 className="not-found__subtitle">Page not found</h2>
          <p className="not-found__text">This Page doesn`t exist or was removed! We suggest you go back.</p>
          <Link
            className="not-found__link"
            to={RoutePath.main}
          >
            Go back
          </Link>
        </div>
        <img
          className="not-found__img"
          src={errorImg}
          alt="Error 404"
        />
      </section>
    </main>
  );
};

export default NotFoundPage;
