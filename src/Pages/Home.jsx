import '../assets/Css/LandingPage.css';
import React, {useState} from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import LandingPageHero from '../Fragments/Landing-page/LandingPageHero';
import LandingPageFeature from '../Fragments/Landing-page/LandingPageFeature';
import LandingPageAbout from '../Fragments/Landing-page/LandingPageAbout';
import LandingPageChoose from '../Fragments/Landing-page/LandingPageChoose';
import LandingPagePartner from '../Fragments/Landing-page/LandingPagePartner';
import LandingPageTestimonials from '../Fragments/Landing-page/LandingPageTestimonials';
import NavbarComp from '../components/NavbarComp';
import FooterComp from '../components/FooterComp';
import LoginModal from '../components/LoginModal';

const Home = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <NavbarComp/>
            <div id="home" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageHero />
            </div>
            <div id="feature" className="w-100 min-vh-100">
                <LandingPageFeature />
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
            <div id="testimonial" className="testimonials w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <LandingPageTestimonials />
                <Row className='mt-4'>
                    <Col md='12'>
                        <button onClick={() => setShow(true)} className='btn-berikan-ulasan'>Berikan Ulasan</button>
                    </Col>
                </Row>
                <LoginModal show={show} setShow={setShow} />
            </div>
            <FooterComp />
        </>
    );
};

export default Home;
