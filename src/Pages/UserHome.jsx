import '../assets/Css/LandingPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {jwtDecode} from 'jwt-decode'; 
import { Container, Row, Col } from 'react-bootstrap';
import LandingPageHeroUser from '../Fragments/Landing-page/LandingPageHeroUser';
import LandingPageFeatureUser from '../Fragments/Landing-page/LandingPageFeatureUser';
import LandingPageAbout from '../Fragments/Landing-page/LandingPageAbout';
import LandingPageChoose from '../Fragments/Landing-page/LandingPageChoose';
import LandingPagePartner from '../Fragments/Landing-page/LandingPagePartner';
import LandingPageTestimonialsUser from '../Fragments/Landing-page/LandingPageTestimonialsUser';
import ProfileNav from '../Components/ProfileNav';
import FooterComp from '../Components/FooterComp';

const UserHome = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [token, setToken] = useState('');
    // const [message, setMessage] = useState('')

    // useEffect(() => {
    //     axios.get('http://localhost:8000/')
    //         .then(res => {
    //             if(res.data.Status === 'OK') {
    //                 setIsLoggedIn(true)
    //                 // Extract the access token from the server response
    //                 const token = res.data.token;
    //                 // Store the access token in the token state
    //                 setToken(token);
    //             } else {
    //                 setIsLoggedIn(false)
    //                 setMessage(res.data.Error)
    //             }
    //         })
    //         .then(err => {
    //             console.log(err)
    //         })
    // }, [])

    return (
        <>
            <ProfileNav/>
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
            <FooterComp />
        </>
    );
};

export default UserHome;
