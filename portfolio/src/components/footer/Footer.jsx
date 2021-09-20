import "./footer.scss"

export default function Footer() {
    return (
      <footer class="footer">
        <div class="footer__bg">
          <div class="footer__container container grid">
            <div>
              <h1 class="footer__title">Froilán</h1>
              <span class="footer__subtitle">Frontend developer</span>
            </div>

            <ul class="footer__links">
              <li>
                <a href="#services" class="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" class="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" class="footer__link">
                  Contact Me
                </a>
              </li>
            </ul>

            <div class="footer__socials">
              <a
                href="https://twitter.com/frolesti"
                target="blank"
                class="footer__social"
              >
                <i class="uil uil-twitter-alt"></i>
              </a>
              <a
                href="https://www.instagram.com/frolesti/?hl=es"
                target="blank"
                class="footer__social"
              >
                <i class="uil uil-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/frolesti/"
                target="blank"
                class="footer__social"
              >
                <i class="uil uil-linkedin"></i>
              </a>
            </div>
          </div>

          <p class="footer__copy">&#169; frolesti. All rights reserved</p>
        </div>
      </footer>
    );
}
