import React, {useState} from 'react'
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import menabungImg from "../../assets/Image/newshero-1.png"
import faqImg from '../../assets/Image/asking-question.png';
import '../../assets/Css/LandingPage.css'

const LandingPageHeroUser = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    return (
        <>
            <Container className="hero-wrapper rounded-3 mx-3">
                <Carousel>
                    <Carousel.Item>
                        <Row className="d-flex align-items-center p-lg-5 p-4">
                            <Col lg="6" className="pt-lg-0 d-flex flex-column align-items-center justify-content-center">
                                <h4 className="text-white mb-3 fs-3 fw-bolder text-center">
                                    Mari menabung bersama teman <br/> dan pasangan kalian!!!
                                </h4>
                                <p className="text-white fs-5 text-center">Mulai langkah kecil hari ini dan rasakan manfaat besar di masa depan. Menabung bersama, mencapai mimpi bersama!</p>
                                <Button onClick={() => navigate('/catatantabungan')} className="btn-readmore mt-4 fw-bolder rounded-5 w-auto fs-6">
                                    Mulai Menabung <i class="fa-solid fa-angle-right"></i>
                                </Button>
                            </Col>
                            <Col lg="6" className="text-center">
                                <img src={menabungImg} alt="" />
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="d-flex align-items-center p-lg-5 p-4">
                            <Col lg="6" className="pt-lg-0 d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-white text-center">
                                    Gimana? Masih bimbang dan bingung?
                                </h3>
                                <h2 className="text-white text-center fw-bold">Ini jawabannya!</h2>
                                <Button  onClick={() => navigate('/contact')} className="btn-faq mt-4 fw-bolder rounded-5 w-25 fs-6">
                                    FAQ
                                </Button>
                            </Col>
                            <Col lg="6" className="text-center">
                                <img src={faqImg} alt="" />
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default LandingPageHeroUser