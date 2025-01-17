import { useEffect, useState } from "react";
import { fetchNewsRates } from "../../api/newsApi";
import { Article } from "../../types/apiTypes";
import { getMs } from "../../utils/helpers/helpers";
import Loader from "../Loader/Loader";
import SectionTitle, { TitlePosition, TitleTheme } from "../SectionTitle/SectionTitle";
import Slider from "../Slider/Slider";
import "./News.scss";

const News = () => {
  const [news, setNews] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetchNewsRates();
        setNews(res.articles);
      } catch (err) {
        setError("Error loading news");
      } finally {
        setLoading(false);
      }
    };

    const intervalId = setInterval(fetchNews, getMs(15));
    fetchNews();

    return () => clearInterval(intervalId);
  }, []);

  const renderContent = () => {
    if (loading)
      return (
        <div className="news__spinner">
          <Loader />
        </div>
      );
    if (error) return <p>{error}</p>;
    if (news?.length) {
      return <Slider articles={news || []} />;
    }
    return <p>Нет данных для отображения</p>;
  };

  return (
    <section className="news">
      <SectionTitle
        theme={TitleTheme.DARK}
        position={TitlePosition.CENTER}
      >
        Current news from the world of finance
      </SectionTitle>
      <p className="news__text">
        We update the news feed every 15 minutes. You can learn more by clicking on the news you are
        interested in.
      </p>
      {renderContent()}
    </section>
  );
};

export default News;
