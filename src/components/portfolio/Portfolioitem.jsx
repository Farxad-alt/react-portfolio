import PortfolioModal from "./PortfolioModal";
import { useState } from "react";
const Portfolioitem = ({ portfolio }) => {
  const [activeIndex, setActiveIndex] = useState(false);
  const openModal = (index) => {
    if (activeIndex === index) {
      setActiveIndex(false);
    } else {
      setActiveIndex(index);
    }
  };
  const closeModal = () => {
    if (activeIndex !== false) {
      setActiveIndex(false);
    }
  };
  return (
    <>
      {portfolio.map((item, index) => (
        <div className="portfolio-img-card" key={index}>
          <div className="img-card" onClick={() => openModal(index)}>
            <div className="overlay"></div>
            <div className="info">
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
            </div>
            <img src={item.image} alt={item.title} />
          </div>
          <PortfolioModal
            item={item}
            isActive={activeIndex === index}
            closeModal={closeModal}
          />
        </div>
      ))}
    </>
  );
};

export default Portfolioitem;
