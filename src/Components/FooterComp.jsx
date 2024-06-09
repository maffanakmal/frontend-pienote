import '../assets/Css/NavBar-Footer.css'
import React, {useState} from 'react';
import {Container, Row, Col, NavLink} from 'react-bootstrap'
import {useNavigate, useLocation} from 'react-router-dom'
import footerImg from "../assets/Image/pienotes-logomark-w.png"
import LoginModal from './LoginModal';

const Footer = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate('');
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    return (
        <footer>
            <div className="footer-top">
                <Container className="mx-auto">
                    <Row>
                        <Col lg='2' sm='6'>
                            <NavLink href="#home"><img src={footerImg} alt="" width="100px" /></NavLink>
                            <div className="social-icons mt-3">
                                <NavLink href="#"><i class="fa-brands fa-facebook"></i></NavLink>
                                <NavLink href="#"><i class="fa-brands fa-instagram"></i></NavLink>
                                <NavLink href="#"><i class="fa-brands fa-linkedin"></i></NavLink>
                                <NavLink href="#"><i class="fa-brands fa-x-twitter"></i></NavLink>
                            </div>
                        </Col>
                        <Col lg='2' sm='6'>
                            <h5 className="mb-0 text-white">Home</h5>
                            <ul>
                                <NavLink  onClick={() => setShow(true)}>Tabungan</NavLink>
                                <NavLink  onClick={() => setShow(true)}>Catatan Keuangan</NavLink>
                                <NavLink  onClick={() => setShow(true)}>Berbagi Tagihan</NavLink>
                            </ul>
                        </Col>
                        <Col lg='2' sm='6'>
                            <h5 className="mb-0 text-white">News</h5>
                            <ul>
                                <NavLink onClick={() => navigate('/news')}>Artikel</NavLink>
                            </ul>
                        </Col>
                        <Col lg='2' sm='6'>
                            <h5 className="mb-0 text-white">About</h5>
                            <ul>
                                {/* Conditionally render the NavLink based on the current URL */}
                                {isHomePage ? (
                                    <NavLink href="#about">Tentang Kami</NavLink>
                                ) : (
                                    <NavLink onClick={() => navigate('/')}>Tentang Kami</NavLink>
                                )}
                            </ul>
                        </Col>
                        <Col lg='2' sm='6'>
                            <h5 className="mb-0 text-white">Contact us</h5>
                            <ul>
                                <NavLink onClick={() => setShow(true)}>Hubungi Kami</NavLink>

                            </ul>
                        </Col>
                        <Col lg='2' sm='6'>
                            <p className="mb-0 text-white">Copyright 2024 PIXEL PERFECT.
                                All rights reserved.
                                Persyaratan layanan | Kebijakan privasi</p>
                        </Col>
                    </Row>
                    <LoginModal show={show} setShow={setShow} />
                </Container>
            </div>
        </footer>
    );
}

export default Footer;
