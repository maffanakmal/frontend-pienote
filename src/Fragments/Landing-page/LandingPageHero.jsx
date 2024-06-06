import { useState } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap'
import { heroSlide } from '../../assets/Js/index'
import readmoreImg from "../../assets/Image/brainstorming-hero.png"
import LoginModal from '../../Components/LoginModal';

const LandingPageHero = () => {
    const [show, setShow] = useState(false);
    
    return (
        <>
            <Container className="hero-wrapper rounded-3 mx-3">
                <Carousel>
                    {heroSlide.map((hero) => {
                        return (
                            <Carousel.Item key={hero.id} interval={hero.delay}>
                                <Row className="box-header d-flex align-items-center p-5">
                                    <Col lg="6" className="pt-lg-0">
                                        <img src={hero.image} alt="Hero Img" />
                                    </Col>
                                    <Col lg="6" className="text-center">
                                        <h3 className="text-white">{hero.text}</h3>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </Container>
            <LoginModal show={show} setShow={setShow} />
        </>
    )
}

export default LandingPageHero