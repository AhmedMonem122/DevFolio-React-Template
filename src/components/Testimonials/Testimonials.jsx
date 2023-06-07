import overlayBg from "../../assets/images/overlay-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "./Testimonials.css";
import testimonialsData from "./testimonialsData";
import TestimonialsList from "./TestimonialsList";

function Testimonials() {
  return (
    <div
      className="testimonials paralax-mf bg-image"
      style={{ backgroundImage: `url(${overlayBg})` }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={{
                disableOnInteraction: false,
              }}
            >
              {testimonialsData.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <TestimonialsList {...item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
