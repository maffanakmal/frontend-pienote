import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ourFeature } from '../../assets/Js/index'


const LandingPageFeature = () => {
    return (
        <>
            <Container className='feature'>
                <Row>
                    <Col className="text-center">
                        <h1>Our Features</h1>
                        <p>Innovative Tools Tailored to Your Financial Needs</p>
                    </Col>
                </Row>
                <Row className="text-center d-flex justify-content-center align-items-center">
                    {ourFeature.map((feature) => {
                        return (
                            <Col
                                lg="6"
                                sm="6"
                                key={feature.id}
                                className="feature-card border rounded-2"
                            >
                                <div className="feature p-lg-5 p-4
                                        
                                    ">
                                    <img src={feature.image} alt="" />
                                    <h5 className="mt-4 mb-3">{feature.title}</h5>
                                    <p>{feature.desc}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    )
}

export default LandingPageFeature
