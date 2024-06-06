import '../assets/Css/LandingPage.css';
import NewsHero from '../Fragments/News-page/NewsHero';
import LandingPageFeature from '../Fragments/Landing-page/LandingPageFeature';
import LandingPageAbout from '../Fragments/Landing-page/LandingPageAbout';
import LandingPageChoose from '../Fragments/Landing-page/LandingPageChoose';
import LandingPagePartner from '../Fragments/Landing-page/LandingPagePartner';
import LandingPageTestimonials from '../Fragments/Landing-page/LandingPageTestimonials';
import NavbarComp from '../Components/NavbarComp';
import FooterComp from '../Components/FooterComp';

const News = () => {
    return (
        <>
            <NavbarComp/>
            <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <NewsHero />
            </div>
            <div className="w-100 min-vh-100">
                
            </div>
            
            <FooterComp />
        </>
    );
};

export default News;
