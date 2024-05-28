import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { whyChoose } from '../../assets/Js/index'


const LandingPageChoose = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Why Choose Us</h1>
                        <p>
                            “Our finance management website ensures meticulous and efficient
                            financial record-keeping, providing clarity and control over
                            your finances like never before”
                        </p>
                    </Col>
                </Row>
                <Row className="text-center d-flex justify-content-center align-items-center">
                    {whyChoose.map((choose) => {
                        return (
                            <Col key={choose.id} className="choose-card mx-3">
                                <div className="choose p-lg-5 p-4">
                                    <img src={choose.image} className="mb-3" alt="" />
                                    <h4>{choose.title}</h4>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    )
}

export default LandingPageChoose