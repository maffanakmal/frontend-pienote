import React from 'react'
import {Container, Col, Row, Card} from 'react-bootstrap'
import { articleCard } from '../../assets/Js'
import { Link } from 'react-router-dom';
import '../../assets/Css/News.css'

const ArticleCard = () => {
    return (
        <>
            <Container>
                <Row className='d-flex align-items-center justify-content-center'>
                    {articleCard.map((articleCard) => {
                    return (
                        <Col md='3' className='small-article-card rounded-2 p-3'>
                        <Link 
                            onClick={() => setShow(true)} 
                            className="text-decoration-none article-link"
                            key={articleCard.id}
                        >
                            <img src={articleCard.image} alt="" />
                            <p className='mt-3'>{articleCard.title}</p>
                        </Link>
                    </Col>
                    );
                })}
                </Row>
            </Container>
        </>
    )
}

export default ArticleCard