
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from "swiper";

import 'swiper/swiper-bundle.css'
import './portfolio.scss';
import PortfolioSlide from './slides/PortfolioSlide';

SwiperCore.use([Navigation, Pagination]);

export default function Portfolio() {

    const slides = [];
    const slidesInfo = [
      {
        name: "Brand Design",
        description:
          "Website adaptable to all devices, with UI and animated interactions",
        href: "#",
        img: "assets/img/perfil.jpg",
      },
    ];
    
     for (let i = 0; i < slidesInfo.length; i += 1) {
         slides.push(
           <SwiperSlide key={`slide-${i}`} tag="li">
             <PortfolioSlide
               name={slidesInfo[i].name}
               description={slidesInfo[i].description}
               slideNumber={i}
               img={slidesInfo[i].img}
               href={slidesInfo[i].href}
             />
           </SwiperSlide>
         );
     }
    return (
      <section className="portfolio section" id="portfolio">
        <h2 class="section__title">Portfolio</h2>
        <span class="section__subtitle">Most recent work</span>
        <Swiper
          id="portfolioSwiper"
          tag="div"
          wrapperTag="ul"
          class="swiper-wrapper"
          navigation
          pagination
          slidesPerView={1}
        >
          {slides}
        </Swiper>
      </section>
    );
}
