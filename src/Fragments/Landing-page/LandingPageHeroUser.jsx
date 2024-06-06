import { Container, Row, Col, Carousel, Button } from 'react-bootstrap'
import readmoreImg from "../../assets/Image/brainstorming-hero.png"
import faqImg from '../../assets/Image/asking-question.png';
import '../../assets/Css/LandingPage.css'

const LandingPageHeroUser = () => {
    return (
        <>
            <Container className="hero-wrapper rounded-3 mx-3">
                <Carousel>
                    <Carousel.Item>
                        <Row className="d-flex align-items-center p-lg-5 p-4">
                            <Col lg="6" className="pt-lg-0 d-flex flex-column align-items-center justify-content-center">
                                <h2 className="text-white text-center fw-bold">Tips and Trick</h2>
                                <h4 className="text-white text-center">
                                    Mengelola keuangan yang baik dan mudah
                                </h4>
                                <p className="text-white text-center">Buat anggaran bulanan di awal bulan, catat pengeluaran rutin, dan prioritaskan tagihan listrik, kredit, serta biaya hidup.</p>
                                <Button className="btn-readmore mt-4 fw-bolder rounded-5 w-25 fs-6">
                                    Read More <i class="fa-solid fa-angle-right"></i>
                                </Button>
                            </Col>
                            <Col lg="6" className="text-center">
                                <img src={readmoreImg} alt="" />
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
                                <Button className="btn-faq mt-4 fw-bolder rounded-5 w-25 fs-6">
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