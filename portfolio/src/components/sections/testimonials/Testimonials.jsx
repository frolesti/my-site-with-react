import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";

import "swiper/swiper-bundle.css";
import "./testimonials.scss";
import TestimonialSlide from "./slides/TestimonialSlide";

SwiperCore.use([Navigation, Pagination]);

export default function Testimonials() {
  const slides = [];
  const slidesInfo = [
    {
      name: "Sara Smith",
      description:
        "I get a good impression, I carry out my project with all the possible quality and attention and support 24h a day.",
      img: "assets/img/perfil.JPG",
      stars: 5,
    },
    {
      name: "Pepe Vilches",
      description:
        "I get a good impression, I carry out my project with all the possible quality and attention and support 24h a day.",
      img: "assets/img/perfil.JPG",
      stars: 5,
    },
    {
      name: "Nacho Carreras",
      description:
        "I get a good impression, I carry out my project with all the possible quality and attention and support 24h a day.",
      img: "assets/img/perfil.JPG",
      stars: 5,
    },
  ];

  for (let i = 0; i < slidesInfo.length; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <TestimonialSlide
          name={slidesInfo[i].name}
          description={slidesInfo[i].description}
          slideNumber={i}
          img={slidesInfo[i].img}
          stars={slidesInfo[i].stars}
        />
      </SwiperSlide>
    );
  }

  return (
    <section class="testimonial section" id="testimonials">
      <h2 class="section__title">Testimonial</h2>
      <span class="section__subtitle">What my clients are saying</span>

      <div className="testimonial__container container swiper-container">
        <Swiper
          id="testimonialSwiper"
          tag="div"
          wrapperTag="ul"
          class="swiper-wrapper"
          navigation
          pagination
        >
          {slides}
        </Swiper>
      </div>
    </section>
  );
}
