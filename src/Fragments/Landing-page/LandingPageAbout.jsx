import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import aboutImg from '../../assets/Image/about-img.png'

const LandingPageAbout = () => {
    return (
        <>
            <Container className="about-container border rounded-3 mx-3">
                <Row className="d-flex align-items-center p-lg-5 p-4">
                    <Col lg="6" className="pt-lg-0">
                        <h3 className="text-white">
                            Membantu Anda meraih tujuan keuangan dengan lebih mudah.
                        </h3>
                        <p className="text-white">
                            Kami hadir dengan semangat untuk merubah pandangan Anda terhadap
                            pencatatan keuangan. Dalam situs kami, Anda tidak hanya akan
                            menemukan alat pencatatan keuangan yang lengkap, tetapi juga
                            fitur-fitur canggih seperti pembagian tagihan, daftar keinginan,
                            dan manajemen tabungan yang intuitif.
                        </p>
                    </Col>
                    <Col lg="6" className="text-center">
                        <img src={aboutImg} alt="" />
                    </Col>
                </Row>
                <Row className="p-lg-5 p-4">
                    <Col className="d-flex justify-content-center">
                        <p className="text-white">
                            Trusted by more than <span className="fw-bold">500,000+</span>
                            <br />
                            active users across the globe
                        </p>
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-center align-items-center">
                            <h1 className="px-3 text-white fw-bold">50K</h1>
                            <p className="text-white">
                                Rating <br /> User
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-center align-items-center">
                            <h1 className="px-3 text-white fw-bold">80%</h1>
                            <p className="text-white">
                                Satisfied and <br /> Happy Clients
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LandingPageAbout