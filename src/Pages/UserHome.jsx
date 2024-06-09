import '../assets/Css/LandingPage.css';
import React from 'react';
import LandingPageHeroUser from '../Fragments/Landing-page/LandingPageHeroUser';
import LandingPageFeatureUser from '../Fragments/Landing-page/LandingPageFeatureUser';
import LandingPageAbout from '../Fragments/Landing-page/LandingPageAbout';
import LandingPageChoose from '../Fragments/Landing-page/LandingPageChoose';
import LandingPagePartner from '../Fragments/Landing-page/LandingPagePartner';
import LandingPageTestimonialsUser from '../Fragments/Landing-page/LandingPageTestimonialsUser';
import ProfileNavbarComp from '../components/ProfileNavbarComp';
import FooterUserComp from '../components/FooterUserComp';

const UserHome = () => {
    return (
        <>
            <ProfileNavbarComp/>
            <div id="home" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageHeroUser />
            </div>
            <div id="feature" className="w-100 min-vh-100">
                <LandingPageFeatureUser />
            </div>
            <div id="about" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageAbout />
            </div>
            <div id="choose" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageChoose />
            </div>
            <div id="partner" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPagePartner />
            </div>
            <div id="testimonial" className="testimonials w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageTestimonialsUser />
            </div>
            <FooterUserComp />
        </>
    );
};

export default UserHome;
