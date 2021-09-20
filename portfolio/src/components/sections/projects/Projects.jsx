import "./projects.scss"

export default function Projects() {
    return (
        <section class="project section" id="projects">
            <div class="project__bg">
                <div class="project__container container grid">
                    <div class="project__data">
                        <h2 class="project__title">Do you have a new project?</h2>
                        <p class="project__description">Contact me now and get a 30% discount on your next project</p>
                        <a href="#contact" class="button button--flex button--white">
                            Contact Me
                            <i class="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div>

                    <img src="assets/img/perfil.JPG" alt="" class="project__img" />
                </div>
            </div>
        </section>
    )
}
