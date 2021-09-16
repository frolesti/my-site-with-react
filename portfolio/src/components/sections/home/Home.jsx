import "./home.scss"
import HomeSocial from "./social/HomeSocial"
import HomeImg from "./img/HomeImg";
import HomeData from "./data/HomeData";
import HomeScroll from "./scroll/HomeScroll"

export default function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <HomeSocial />
                {/* <HomeImg /> */}
                <HomeData />
                <HomeScroll />
            </div>
        </section>
    )
}
