import '../assets/Css/NavBar-Footer.css'
import React from 'react';
import {Container, Row, Col, NavLink} from 'react-bootstrap'
import footerImg from "../assets/Image/pienotes-logomark-w.png"
import { useNavigate, useLocation } from 'react-router-dom';

const FooterUser = () => {
    const navigate = useNavigate('');
    const location = useLocation();

    const isUserHomePage = location.pathname === '/home';

    return (
        <footer>
            <div className="footer-top">
                <Container className="mx-auto">
                    <Row>
                        <Col lg='2' sm='6'>
                            <img src={footerImg} alt="" width="100px"/>
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
                                <NavLink onClick={() => navigate('/tabungan')}>Tabungan</NavLink>
                                <NavLink  onClick={() => navigate('/catatankeuangan/pemasukan')}>Catatan Keuangan</NavLink>
                                <NavLink onClick={() => navigate('/berbagitagihan')}>Berbagi Tagihan</NavLink>
                            </ul>
                        </Col>
                        <Col lg='2' sm='6'>
                            <h5 className="mb-0 text-white">News</h5>
                            <ul>
                                <NavLink onClick={() => navigate('/article')}>Artikel</NavLink>
                            </ul>
                        </Col>
                        <Col lg='2' sm='6'>
                            <h5 className="mb-0 text-white">About</h5>
                            <ul>
                                {isUserHomePage ? (
                                    <NavLink href="#about">Tentang Kami</NavLink>
                                ) : (
                                    <NavLink onClick={() => navigate('/home')}>Tentang Kami</NavLink>
                                )}
                            </ul>
                        </Col>
                        <Col lg='2' sm='6'>
                            <h5 className="mb-0 text-white">Contact us</h5>
                            <ul>
                                <NavLink onClick={() => navigate('/contact')}>Hubungi Kami</NavLink>

                            </ul>
                        </Col>
                        <Col lg='2' sm='6'>
                            <p className="mb-0 text-white">Copyright 2024 PIXEL PERFECT.
                                All rights reserved.
                                Persyaratan layanan | Kebijakan privasi</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default FooterUser;
