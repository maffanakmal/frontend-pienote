import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { news } from '../../assets/Js';
import '../../assets/Css/News.css';
import LoginModal from '../../components/LoginModal';

const NewsCard = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Container className='article-container mx-auto'>
                {news.map((article) => {
                    return (
                        <Link 
                            onClick={() => setShow(true)} 
                            className="text-decoration-none article-link"
                            key={article.id}
                        >
                            <Row className='big-article-card rounded-3 d-flex align-items-center justify-content-center mb-5'>
                                <Col xs={12} md={2} className='mx-auto w-25'>
                                    <img src={article.image} alt="" className='rounded-2'/>
                                </Col>
                                <Col xs={12} md={8}>
                                    <h3 className='mb-3 text-black'>{article.title}</h3>
                                    <p className='text-black'>{article.desc}</p>
                                </Col>
                            </Row>
                        </Link>
                    );
                })}
            </Container>
            <LoginModal show={show} setShow={setShow} />
        </>
    );
}

export default NewsCard;
