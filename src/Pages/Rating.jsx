import React, { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
        console.log('Rating:', rating);
        console.log('Feedback:', feedback);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card className="p-4" style={{ maxWidth: '500px', width: '100%' }}>
                <Card.Header>
                    <NavLink to='/home'><i class="fa-solid fa-x"></i></NavLink>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Kami ingin mendengar pendapat Anda!</Card.Title>
                    <Card.Text>
                        Bagikan pengalaman Anda dengan kami melalui ulasan singkat. Umpan balik Anda sangat membantu kami untuk terus meningkatkan layanan.
                    </Card.Text>
                    <Card.Text>Seberapa Puas Anda dengan Aplikasi Kami?</Card.Text>
                    <div className="mb-3">
            {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                    <i
                        key={index}
                        className={`fa-star ${currentRating <= (hover || rating) ? 'fa-solid' : 'fa-regular'}`}
                        style={{
                            fontSize: '2em',
                            color: currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9',
                            cursor: 'pointer',
                            marginRight: '5px',
                        }}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => setRating(currentRating)}
                    ></i>
                );
            })}
        </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="feedback">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Senang menemukan aplikasi ini karena sangat membantu saya dan teman saya berbagi tagihan dan menabung bersama untuk wisuda!"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Kirim
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FeedbackForm;