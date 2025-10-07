import { contactData } from "../../data/contactData";

const ContactLeft = () => {
  return (
    <div className="contact-left">
      <h2>Let's discuss your project</h2>
      <ul className="contact-list">
        {contactData.map((item) => (
          <li key={item.id}>
            <h3>
              <item.icon /> {item.title}
            </h3>
            <a href={item.link}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactLeft;
