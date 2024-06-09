import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ourFeature } from '../../assets/Js/index';
import { Link, useNavigate } from 'react-router-dom';

const LandingPageFeature = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container className='feature'>
                <Row>
                    <Col className="text-center mb-4">
                        <h1 className='mb-3'>Our Features</h1>
                        <p>Innovative Tools Tailored to Your Financial Needs</p>
                    </Col>
                </Row>
                <Row className="text-center d-flex justify-content-center align-items-center">
                    {ourFeature.map((feature) => {
                        return (
                            <Col
                                key={feature.id}
                                lg="6"
                                sm="6"
                                className="feature-card-user border rounded-2 mb-4"
                            >
                                <div
                                    onClick={() => navigate(feature.path)}
                                    className="text-decoration-none feature-link"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="feature p-lg-5 p-4">
                                        <img src={feature.image} alt={feature.title} className="img-fluid rounded-2"/>
                                        <h5 className="mt-4 mb-3">{feature.title}</h5>
                                        <p>{feature.desc}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

export default LandingPageFeature;
