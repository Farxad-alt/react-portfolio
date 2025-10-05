import { FaArrowRightLong } from "react-icons/fa6";
import ServiceModal from "./ServiceModal";
import {useState} from "react";

const ServiceItem = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const openModal = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }
  const closeModal = () => {
    if (activeIndex !== null) {
      setActiveIndex(null);
    }
  }
  return (
    <>
      {services.map((item, index) => (
        <li className="services-container" key={index}>
          <div className="service-card">
            <item.icon className="services-icon" />
            <h3>{item.title}</h3>
            <div className="learn-more-btn" onClick={() => openModal(index)}>
              Learn More
              <FaArrowRightLong className="learn-more-icon" />
            </div>
          </div>
          <ServiceModal item={item} isActive={activeIndex === index} closeModal={closeModal}/>
        </li>
      ))}
    </>
  );
};
export default ServiceItem;
