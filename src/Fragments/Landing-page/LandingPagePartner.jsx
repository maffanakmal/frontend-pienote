import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ourPartner } from '../../assets/Js/index'

const LandingPagePartner = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Our Partner</h1>
                        <p>
                            Collaborating with Industry Leaders for Comprehensive Solutions
                        </p>
                    </Col>
                </Row>
                <Row className="text-center d-flex justify-content-center align-items-center">
                    {ourPartner.map((partner) => {
                        return (
                            <Col key={partner.id} className="partner-card mx-3">
                                <div className="partner p-lg-5 p-4">
                                    <img src={partner.image} className="mb-3" alt="" />
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>

        </>
    )
}

export default LandingPagePartner