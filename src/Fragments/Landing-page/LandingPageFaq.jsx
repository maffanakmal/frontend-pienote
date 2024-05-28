import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import faqImg from '../../assets/Image/asking-question.png';
import LoginModal from '../../Components/LoginModal';

const LandingPageFaq = () => {
    const [show, setShow] = useState(false);

    return (
        <>
        <Container className="faq-wrapper border rounded-3 mx-3">
            <Row className="d-flex align-items-center p-lg-5 p-4">
                <Col lg="6" className="pt-lg-0 d-flex flex-column align-items-center justify-content-center">
                    <h3 className="text-white text-center">
                        Gimana? Masih bimbang dan bingung?
                    </h3>
                    <h2 className="text-white text-center fw-bold">Ini jawabannya!</h2>
                    <Button className="btn-faq mt-4 fw-bolder rounded-5 w-25 fs-6" onClick={() => setShow(true)}>
                        FAQ
                    </Button>
                </Col>
                <Col lg="6" className="text-center">
                    <img src={faqImg} alt="" />
                </Col>
            </Row>
        </Container>
        <LoginModal show={show} setShow={setShow} />
        </>
    );
}

export default LandingPageFaq;
