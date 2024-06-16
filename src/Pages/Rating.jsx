// import React, { useState } from 'react';
// import { Container, Card, Button, Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

// const FeedbackForm = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(null);
//   const [feedback, setFeedback] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic
//     console.log('Rating:', rating);
//     console.log('Feedback:', feedback);
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <Card className="p-4" style={{ maxWidth: '500px', width: '100%' }}>
//         <Card.Body>
//           <Card.Title>Kami ingin mendengar pendapat Anda!</Card.Title>
//           <Card.Text>
//             Bagikan pengalaman Anda dengan kami melalui ulasan singkat. Umpan balik Anda sangat membantu kami untuk terus meningkatkan layanan.
//           </Card.Text>
//           <Card.Text>Seberapa Puas Anda dengan Aplikasi Kami?</Card.Text>
//           <div className="mb-3">
//             {[...Array(5)].map((_, index) => {
//               const currentRating = index + 1;
//               return (
//                 <FontAwesomeIcon
//                   key={index}
//                   icon={currentRating <= (hover || rating) ? solidStar : regularStar}
//                   size="2x"
//                   color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
//                   onMouseEnter={() => setHover(currentRating)}
//                   onMouseLeave={() => setHover(null)}
//                   onClick={() => setRating(currentRating)}
//                   style={{ cursor: 'pointer', marginRight: '5px' }}
//                 />
//               );
//             })}
//           </div>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="feedback">
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Senang menemukan aplikasi ini karena sangat membantu saya dan teman saya berbagi tagihan dan menabung bersama untuk wisuda!"
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit" className="w-100">
//               Kirim
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;
