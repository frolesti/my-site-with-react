import "./contact.scss"

export default function Contact() {
    return (
        <section class="contact section" id="contact">
            <h2 class="section__title">Contact Me</h2>
            <span class="section__subtitle">Get in touch</span>

            <div class="contact__container container grid">
                <div>
                    <div class="contact__information">
                        <i class="uil uil-phone contact__icon"></i>

                        <div>
                            <h3 class="contact__title">Call Me</h3>
                            <span class="contact__subtitle">999-777-666</span>
                        </div>

                    </div>
                    <div class="contact__information">
                        <i class="uil uil-envelope contact__icon"></i>

                        <div>
                            <h3 class="contact__title">Email</h3>
                            <span class="contact__subtitle">frolesti4@gmail.com</span>
                        </div>
                        
                    </div>
                    <div class="contact__information">
                        <i class="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 class="contact__title">Location</h3>
                            <span class="contact__subtitle">Terrassa (Barcelona), Spain</span>
                        </div>
                        
                    </div>
                </div>

                <form action="" class="contact__form grid">
                    <div class="contact__inputs grid">
                        <div class="contact__content">
                            <label for="" class="contact__label">Name</label>
                            <input type="text" class="contact__input" />
                        </div>
                        <div class="contact__content">
                            <label for="" class="contact__label">Email</label>
                            <input type="email" class="contact__input" />
                        </div>
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">Project</label>
                        <input type="text" class="contact__input" />
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">Message</label>
                        <textarea name="" id="" cols="0" rows="8¡7" class="contact__input"></textarea>
                    </div>

                    <div>
                        <a href="#" class="button button--flex">
                            Send Message 
                            <i class="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}
