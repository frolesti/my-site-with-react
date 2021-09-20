import "./main.scss"
import React from 'react'
import About from '../about/About'
import Home from '../home/Home'
import Qualifications from '../qualifications/Qualifications'
import Skills from '../skills/Skills'
import Services from '../services/Services'
import Portfolio from '../portfolio/Portfolio'
import Projects from '../projects/Projects'
import Testimonials from '../testimonials/Testimonials'
import Contact from '../contact/Contact'
import Footer from '../../footer/Footer'

export default function Main() {
    return (
      <div>
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualifications />
          <Services />
          <Portfolio />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />

          <a href="#" class="scrollup" id="scroll-up">
            <i class="uil uil-arrow-up scrollup__icon"></i>
          </a>
        </main>
      </div>
    );
}
