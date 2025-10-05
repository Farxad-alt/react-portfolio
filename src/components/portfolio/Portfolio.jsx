import SectionTitle from "../sectionTitle/SectionTitle";
import { portfolio } from "../../data/portfolio";
import Portfolioitem from "./Portfolioitem";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="Portfolio">
      <div className="container flex-center">
        <SectionTitle title="Portfolio" subtitle="Portfolio" />
        <div className="portfolio-wrapper">
          <Portfolioitem portfolio={portfolio} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
