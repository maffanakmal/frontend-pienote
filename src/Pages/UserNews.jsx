import '../assets/Css/LandingPage.css';
import NewsHeroUser from '../Fragments/News-page/NewsHeroUser';
import NewsCardUser from '../Fragments/News-page/NewsCardUser'
import LandingPageTestimonials from '../Fragments/Landing-page/LandingPageTestimonials';
import FooterUserComp from '../components/FooterUserComp';
import ProfileNavbarComp from '../components/ProfileNavbarComp';

const UserNews = () => {
    return (
        <>
            <ProfileNavbarComp/>
            <div id='home' className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <NewsHeroUser />
            </div>
            <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <NewsCardUser/>
            </div>
            <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageTestimonials/>
            </div>
            <FooterUserComp />
        </>
    );
};

export default UserNews;
