import "./qualifications.scss"
import experience from "./template/experience"
import ExpTemplate from "./template/ExpTemplate"

export default function Qualifications() {
    return (
      <div>
        <section class="qualification section">
          <h2 class="section__title">Qualification</h2>
          <span class="section__subtitle">My personal journey</span>

          <div class="qualification__container container">
            <div class="qualification__tabs">
              <div
                class="qualification__button button--flex qualification__active"
                data-target="#education"
              >
                <i class="uil uil-graduation-cap qualification__icon"></i>
                Education
              </div>
              <div
                class="qualification__button button--flex"
                data-target="#work"
              >
                <i class="uil uil-briefcase-alt qualification__icon"></i>
                Work
              </div>
            </div>
            <div class="qualification__sections">
              {/* <!--===========ACADEMIC EXPERIENCE===========--> */}
              <div
                class="qualification__content qualification__active"
                data-content
                id="education"
              >
                {/* <!--============QUALIFICATION 1==============--> */}
                <div class="qualification__data">
                  <ExpTemplate
                    title={experience.academicExperience[0].name}
                    school={experience.academicExperience[0].school}
                    year={experience.academicExperience[0].year}
                  />
                  <div>
                    <span class="qualification__rounder"></span>
                    <span class="qualification__line"></span>
                  </div>
                </div>

                {/* <!--============QUALIFICATION 2==============--> */}
                <div class="qualification__data">
                  <div></div>

                  <div>
                    <span class="qualification__rounder"></span>
                    <span class="qualification__line"></span>
                  </div>

                  <ExpTemplate
                    title={experience.academicExperience[1].name}
                    school={experience.academicExperience[1].school}
                    year={experience.academicExperience[1].year}
                  />
                </div>

                {/* <!--============QUALIFICATION 3==============--> */}
                <div class="qualification__data">
                  <ExpTemplate
                    title={experience.academicExperience[2].name}
                    school={experience.academicExperience[2].school}
                    year={experience.academicExperience[2].year}
                  />

                  <div>
                    <span class="qualification__rounder"></span>
                    <span class="qualification__line"></span>
                  </div>
                </div>

                {/* <!--============QUALIFICATION 4==============--> */}
                <div class="qualification__data">
                  <div></div>

                  <div>
                    <span class="qualification__rounder"></span>
                    {/* <span class="qualification__line"></span> */}
                  </div>
                  <ExpTemplate
                    title={experience.academicExperience[3].name}
                    school={experience.academicExperience[3].school}
                    year={experience.academicExperience[3].year}
                  />
                </div>
              </div>

              {/* <!--===========WORK EXPERIENCE============--> */}
              <div class="qualification__content" data-content id="work">
                {/* <!--============QUALIFICATION 5==============--> */}
                <div class="qualification__data">
                  <div>
                    <h3 class="qualification__title">
                      Master in Software Development
                    </h3>
                    <span class="qualification__subtitle">
                      Assembler School
                    </span>
                    <div class="qualification__calendar">
                      <i class="uil ul-calendar-alt"></i>
                      2020-2021
                    </div>
                  </div>
                  <div>
                    <span class="qualification__rounder"></span>
                    <span class="qualification__line"></span>
                  </div>
                </div>

                {/* <!--============QUALIFICATION 6==============--> */}
                <div class="qualification__data">
                  <div></div>

                  <div>
                    <span class="qualification__rounder"></span>
                    <span class="qualification__line"></span>
                  </div>

                  <div>
                    <h3 class="qualification__title">Physics Degree</h3>
                    <span class="qualification__subtitle">
                      Universitat de Barcelona
                    </span>
                    <div class="qualification__calendar">
                      <i class="uil ul-calendar-alt"></i>
                      2014-2020
                    </div>
                  </div>
                </div>

                {/* <!--============QUALIFICATION 7==============--> */}
                <div class="qualification__data">
                  <div>
                    <h3 class="qualification__title">Big Data Course</h3>
                    <span class="qualification__subtitle">
                      Universidad de Deusto
                    </span>
                    <div class="qualification__calendar">
                      <i class="uil ul-calendar-alt"></i>
                      2018-2020
                    </div>
                  </div>

                  <div>
                    <span class="qualification__rounder"></span>
                    <span class="qualification__line"></span>
                  </div>
                </div>

                {/* <!--============QUALIFICATION 8==============--> */}
                <div class="qualification__data">
                  <div></div>

                  <div>
                    <span class="qualification__rounder"></span>
                    {/* <!-- <span class="qualification__line"></span> --> */}
                  </div>

                  <div>
                    <h3 class="qualification__title">
                      Grau en Disseny i Creació Digital
                    </h3>
                    <span class="qualification__subtitle">
                      Universitat Oberta de Catalunya
                    </span>
                    <div class="qualification__calendar">
                      <i class="uil ul-calendar-alt"></i>
                      2019-2020
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
