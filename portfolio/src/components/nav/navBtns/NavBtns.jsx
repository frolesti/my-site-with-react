import "./navBtns.scss"

export default function NavBtns() {
    return (
        <div class="nav__btns">
                {/* Theme Change button*/}
                <i class="uil uil-moon change-theme" id="theme-button"></i>
                <div class="nav__toggle" id="nav-toggle">
                    <i class="uil uil-apps"></i>
                </div>
            </div>
    )
}
