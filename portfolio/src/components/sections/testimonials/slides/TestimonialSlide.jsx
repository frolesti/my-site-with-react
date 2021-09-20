import "./testimonialSlide.scss";

export default function TestimonialSlide(props) {
  return (
    <div class="testimonial__content swiper-slide">
      <div class="testimonial__data">
        <div class="testimonial__header">
          <img src={`${props.img}`} alt="" class="testimonial__img" />

          <div>
            <h3 class="testimonial__name">{props.name}</h3>
            <span class="testimonial__client">Client</span>
          </div>
        </div>

        <div>
          <i class="uil uil-star testimonial__icon-star"></i>
          <i class="uil uil-star testimonial__icon-star"></i>
          <i class="uil uil-star testimonial__icon-star"></i>
          <i class="uil uil-star testimonial__icon-star"></i>
          <i class="uil uil-star testimonial__icon-star"></i>
        </div>
      </div>

      <p class="testimonial__description">
        {props.description}
      </p>
    </div>
  );
}
