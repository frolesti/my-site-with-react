import "./home.scss"
import HomeSocial from "./social/HomeSocial"
import HomeImg from "./img/HomeImg";
import HomeData from "./data/HomeData";
import HomeScroll from "./scroll/HomeScroll"

export default function Home() {
    return (
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <HomeSocial />
            <HomeImg />
            <HomeData />
          </div>
          <HomeScroll />
        </div>
      </section>
    );
}
