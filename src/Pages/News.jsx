import '../assets/Css/LandingPage.css';
import NewsHero from '../Fragments/News-page/NewsHero';
import NewsCard from '../Fragments/News-page/NewsCard'
import LandingPageTestimonials from '../Fragments/Landing-page/LandingPageTestimonials';
import NavbarComp from '../components/NavbarComp';
import FooterComp from '../components/FooterComp';

const News = () => {
    return (
        <>
            <NavbarComp/>
            <div id='home' className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <NewsHero />
            </div>
            <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <NewsCard/>
            </div>
            <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageTestimonials/>
            </div>
            <FooterComp />
        </>
    );
};

export default News;
