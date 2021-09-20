import "./skills.scss"

export default function Skills() {
    return (
        <section class="skills section" id="skills">
            <h2 class="section__title">Skills</h2>
            <span class="section__subtitle">My technical level</span>

            <div class="skills__container container grid">
                <div>
                    {/* <!--=======================FRONTEND DEVELOPER SKILLS==========================--> */}
                    <div class="skills__content skills__open">
                        <div class="skills__header">
                            <i class="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h1 class="skills__title">Frontend Developer</h1>
                                <span class="skills__subtitle">More than 4 years</span>
                            </div>

                            <i class="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div class="skills__list grid">
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">HTML</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__html"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">CSS</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__css"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">JavaScript</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__js"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">React</h3>
                                    <span class="skills__number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__react"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--=======================BACKEND DEVELOPER SKILLS==========================--> */}
                    <div class="skills__content skills__close">
                        <div class="skills__header">
                            <i class="uil uil-server-network skills__icon"></i>

                            <div>
                                <h1 class="skills__title">Backend Developer</h1>
                                <span class="skills__subtitle">More than 2 years</span>
                            </div>

                            <i class="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div class="skills__list grid">
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">PHP</h3>
                                    <span class="skills__number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__php"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">Node JS</h3>
                                    <span class="skills__number">70%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__nodejs"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">Firebase</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__firebase"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">Python</h3>
                                    <span class="skills__number">90%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__python"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
