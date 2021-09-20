import "./about.scss"

export default function About() {
    return (
        <section class="about section" id="about">
            <h2 class="section__title">About Me</h2>
            <span class="section__subtitle">My Introduction</span>

            <div class="about__container container grid">
                <img src="#" alt="" class="about__img" />
                <div class="about__data">
                    <p class="about__description">Web developer, with extensive knowledge and years of experience,
                        working in web technologies and UI / UX design, delivering quality work.</p>
                    <div class="about__info">
                        <div>
                            <span class="about__info-title">03</span>
                            <span class="about__info-name">Years <br /> experience</span>
                        </div>
                        <div>
                            <span class="about__info-title">20+</span>
                            <span class="about__info-name">Completed <br /> project</span>
                        </div>
                        <div>
                            <span class="about__info-title">05+</span>
                            <span class="about__info-name">Companies <br /> worked</span>
                        </div>
                    </div>
                    <div class="about__buttons">
                        <a href="" class="button button--flex">
                            Download CV<i class="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
