import "./nav.scss"
import NavBtns from "./navBtns/NavBtns";
import NavItem from "./navItems/NavItem"

export default function Nav() {
    return (
      <div className="nav container">
        <a href="#" class="nav__logo">
          Froilán
        </a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list grid">
            <NavItem id="home" active="active-link" icon="estate" />
            <NavItem id="about" active="" icon="user" />
            <NavItem id="skills" active="" icon="file-alt" />
            <NavItem id="services" active="" icon="briefcase-alt" />
            <NavItem id="portfolio" active="" icon="scenery" />
            <NavItem id="contact" active="" icon="message" />
          </ul>
        </div>
        <NavBtns />
      </div>
    );
}
