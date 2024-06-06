import { Modal, Row, Col, Button } from 'react-bootstrap';
import modalImg from '../assets/Image/login-modal.png'
import {useNavigate} from 'react-router-dom'
import '../assets/Css/LandingPage.css'

const LoginModal = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    const navigate = useNavigate()

    return (
        <Modal
            size='lg'
            show={show}
            onHide={handleClose}
            dialogClassName="modal-dialog-centered"
            aria-labelledby="login-modal"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md='6' className='d-flex align-items-center justify-content-center'>
                        <div className='text-center'>
                            <h3 className='mb-3 text-white'>Mulai Rencanakan Masa Depan Finansial Anda</h3>
                                <Button onClick={() => navigate('/register')} className='btn-modal btn-lg mb-1'>Daftar</Button>
                            <p className='mb-1 text-white'>atau</p>
                                <Button onClick={() => navigate('/login')} className='btn-modal btn-lg'>Masuk</Button>
                        </div>
                    </Col>
                    <Col md='6'>
                        <div>
                            <img src={modalImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;
