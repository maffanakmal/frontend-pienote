import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { news } from '../../assets/Js';
import '../../assets/Css/News.css';

const NewsCardUser = () => {

    return (
        <Container className='article-container mx-auto'>
            {news.map((article) => {
                return (
                    <Row key={article.id} className='big-article-card rounded-3 d-flex align-items-center justify-content-center mb-5'>
                        <Col xs={12} md={2} className='mx-auto w-25'>
                            <img src={article.image} alt="" className='rounded-2'/>
                        </Col>
                        <Col xs={12} md={8}>
                            <Link 
                                to={article.path} 
                                className="text-decoration-none article-link"
                            >
                                <h3 className='mb-3 text-black'>{article.title}</h3>
                                <p className='text-black'>{article.desc}</p>
                            </Link>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    );
}

export default NewsCardUser;
