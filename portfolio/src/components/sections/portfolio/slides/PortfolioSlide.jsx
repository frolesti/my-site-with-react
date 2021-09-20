import "./portfolioSlide.scss"

export default function PortfolioSlide(props) {
  return (
    <div className="portfolio__content grid swiper-slide">
      <img
        src={`${props.img}`}
        alt={`slide ${props.slideNumber}`}
        class="portfolio__img"
      />

      <div className="portfolio__data">
        <h3 className="portfolio__title">{props.name}</h3>
        <p className="portfolio__description">{props.description}</p>
        <a
          href={props.href}
          className="button button--flex button--small portfolio__button"
        >
          Demo
          <i className="uil uil-arrow-right button__icon"></i>
        </a>
      </div>
    </div>
  );
}
