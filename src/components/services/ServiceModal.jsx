import { FaCheckCircle,FaXing  } from "react-icons/fa";
const ServiceModal = ({item, isActive, closeModal}) => {

  return (
    <>
      <div className={`service-modal ${isActive ? 'active' : ""}`}>
        <div className="service-modal-body">
          <FaXing className="modal-close-btn" onClick={closeModal}/>
          <h3>{item.title}</h3>
          <h4>{item.subTitle}</h4>
          <p>
            {item.description}
          </p>
          <h4>{item.text}</h4>
          <ul>
            {item.list.map((item,index) => {
              return(
            <li key={index}>
              <FaCheckCircle />
              {item}
            </li>
              )
            })}

          </ul>
        </div>
      </div>
    </>
  );
};
export default ServiceModal;
