import '../assets/Css/LandingPage.css'
import '../assets/Css/NavBar-Footer.css'
import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import LandingPageHero from '../Fragments/Landing-page/LandingPageHero'
import LandingPageFeature from '../Fragments/Landing-page/LandingPageFeature'
import LandingPageAbout from '../Fragments/Landing-page/LandingPageAbout'
import LandingPageChoose from '../Fragments/Landing-page/LandingPageChoose'
import LandingPagePartner from '../Fragments/Landing-page/LandingPagePartner'
import LandingPageTestimonials from '../Fragments/Landing-page/LandingPageTestimonials'
import LandingPageFaq from '../Fragments/Landing-page/LandingPageFaq'
import NavbarComp from "../Components/NavbarComp";
import FooterComp from "../Components/FooterComp";


const Home = () => {
    return (
            <> 
            <NavbarComp/>
            <div id="home" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageHero/>
            </div>
            <div id="feature" className="w-100 min-vh-100">
                <LandingPageFeature/>
            </div>
            <div id="about" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageAbout/>
            </div>
            <div id="choose" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageChoose/>
            </div>
            <div id="partner" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPagePartner/>
            </div>
            <div id="testimonial" className="testimonials w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageTestimonials/>
            </div>
            <div id="contact" className=" w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageFaq/>
            </div>
            <FooterComp/>
        </>
    );
};

export default Home;
