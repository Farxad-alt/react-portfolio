import "./Clients.css";
import { clientData } from "../../data/clients";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "../sectionTitle/SectionTitle";
// import Clients from "../../data/clients";

function Clients() {
  return (
    <section className="section our-client" id="Clients">
      <div className="container flex-center">
        <SectionTitle title="Our Clients" subtitle="Our Clients" />
        <div className="our-client-wrapper">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="client-swiper"
          >
            {clientData.map((client) => (
              <SwiperSlide key={client.item}>
                <div
                  className="swiper-slide swiper-slide-next"
                  data-swiper-slide-index="2"
                >
                  <div className="swiper-slide swiper-client-block">
                    <div className="client-img">
                      <img src={client.image} alt={client.title} />
                    </div>
                    <div className="client-details">
                      <p>{client.subtitle}</p>
                      <h3>{client.title}</h3>
                      <span>{client.position}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Clients;
