import PortfolioModal from "./PortfolioModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideVariants } from "../../utils/animate";
const Portfolioitem = ({ item, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <motion.div
      className="portfolio-img-card"
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: false, amount: 0.5 }}
      variants={slideVariants("top", 0.5, -50, true)}
    >
      <div className="img-card" onClick={openModal}>
        <div className="overlay"></div>
        <div className="info">
          <h3>{item.title}</h3>
          <span>{item.subtitle}</span>
        </div>
        <img src={item.image} alt={item.title} />
      </div>
      {isModalOpen && (
        <PortfolioModal
          item={item}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </motion.div>
  );
};

export default Portfolioitem;
