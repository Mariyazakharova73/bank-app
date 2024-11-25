import Design from "../../components/Design/Design";
import ExchangeRate from "../../components/ExchangeRate/ExchangeRate";
import Features from "../../components/Features/Features";
import Support from "../../components/Support/Support";
import World from "../../components/World/World";

const HomePage = () => {
  return (
    <main className="container">
      <Design />
      <Features />
      <ExchangeRate />
      <World />
      <Support />
    </main>
  );
};

export default HomePage;
