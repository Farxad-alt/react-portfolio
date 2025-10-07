import { FaXing } from "react-icons/fa";

const PortfolioModal = ({ item, isModalOpen, closeModal }) => {
  return (
    <div className={`portfolio-model ${isModalOpen ? "active" : ""}`}>
      <div className="portfolio-model-body">
        <FaXing className="modal-close-btn" onClick={closeModal} />
        <h3>{item.title}</h3>
        <img src={item.image} alt={item.title} />
        <p>{item.description}</p>
      </div>
    </div>
  );
};
export default PortfolioModal;
