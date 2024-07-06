import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import ProfileNavbarComp from '../../components/ProfileNavbarComp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TabunganPribadi = () => {
    const [values, setValues] = useState({
        saving_name: '',
        description: '',
        target: '',
        place_saving: '',
        dateline: '',
        notification: '',
        wishlist: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/tabunganpribadi', values, { withCredentials: true })
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error);
                    setShow(true);
                    setTimeout(() => {
                        setShow(false);
                    }, 5000);
                } else {
                    setSuccess('Personal saving has been created!');
                    setShow(true);
                    setTimeout(() => {
                        setShow(false);
                    }, 4000);
                    setTimeout(() => {
                        navigate('/catatantabungan');
                    }, 3000);
                }
            })
            .catch(err => {
                const errorMessage = err.response && err.response.data && err.response.data.error
                    ? err.response.data.error
                    : 'An unexpected error occurred';
                setError(errorMessage);
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 5000);
            });
    };

    return (
        <>
            <ProfileNavbarComp />
            <Container className="tabunganpribadi-container min-vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop: '100px' }}>
                <div className='w-100 rounded-3' style={{ maxWidth: '70%', backgroundColor: '#d1e7ff', padding: '50px' }}>
                    <h3 className="text-center mb-4">Buat Tabungan Baru</h3>
                    <Form onSubmit={handleSubmit}>
                        {show && error && (
                            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                <p>{error}</p>
                            </Alert>
                        )}
                        {show && success && (
                            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                                <p>{success}</p>
                            </Alert>
                        )}
                        <Row className='splitbill-input-row mt-3 p-4'>
                            <Col md='6'>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='saving_name' className="form-label">Nama Tabungan</Form.Label>
                                    <input
                                        type="text"
                                        name='saving_name'
                                        className="form-control fw-light rounded-2"
                                        onChange={e => setValues({ ...values, saving_name: e.target.value })}
                                        id='saving_name'
                                        placeholder='Masukan nama tabungan'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='description' className="form-label">Keterangan Tabungan</Form.Label>
                                    <textarea
                                        type="text"
                                        rows="4"
                                        cols="50"
                                        onChange={e => setValues({ ...values, description: e.target.value })}
                                        name='description'
                                        className="form-control fw-light rounded-2"
                                        id='description'
                                        placeholder='Masukan keterangan tabungan'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='target' className="form-label">Target Tabungan</Form.Label>
                                    <input
                                        type="number"
                                        name='target'
                                        className="form-control fw-light rounded-2"
                                        onChange={e => setValues({ ...values, target: e.target.value })}
                                        id='target'
                                        placeholder='Masukan target tabungan'
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md='6'>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='place_saving' className="form-label">Dimana Menyimpan Tabungan</Form.Label>
                                    <input
                                        type="text"
                                        name='place_saving'
                                        className="form-control fw-light rounded-2"
                                        onChange={e => setValues({ ...values, place_saving: e.target.value })}
                                        id='place_saving'
                                        placeholder='Masukan tempat menyimpan'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='dateline' className="form-label">Tanggal Berakhir Tabungan</Form.Label>
                                    <input
                                        type="date"
                                        name='dateline'
                                        className="form-control fw-light rounded-2"
                                        onChange={e => setValues({ ...values, dateline: e.target.value })}
                                        id='dateline'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Pemberitahuan</Form.Label>
                                    <div>
                                        <Form.Check 
                                            inline 
                                            type="radio" 
                                            label="Hari" 
                                            name="notification" 
                                            id="Hari" 
                                            value="Hari" 
                                            onChange={e => setValues({ ...values, notification: e.target.value })} 
                                        />
                                        <Form.Check 
                                            inline 
                                            type="radio" 
                                            label="Minggu" 
                                            name="notification" 
                                            id="Minggu" 
                                            value="Minggu" 
                                            onChange={e => setValues({ ...values, notification: e.target.value })} 
                                        />
                                        <Form.Check 
                                            inline 
                                            type="radio" 
                                            label="Bulan" 
                                            name="notification" 
                                            id="Bulan" 
                                            value="Bulan" 
                                            onChange={e => setValues({ ...values, notification: e.target.value })} 
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Jadikan Wishlist</Form.Label>
                                    <div>
                                        <Form.Check 
                                            inline 
                                            type="radio" 
                                            label="Iya" 
                                            name="wishlist" 
                                            id="yes" 
                                            value="1" 
                                            onChange={e => setValues({ ...values, wishlist: e.target.value })} 
                                        />
                                        <Form.Check 
                                            inline 
                                            type="radio" 
                                            label="Tidak" 
                                            name="wishlist" 
                                            id="no" 
                                            value="0" 
                                            onChange={e => setValues({ ...values, wishlist: e.target.value })} 
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col md='6' className='d-flex justify-content-start align-items-center'>
                                <Button variant='secondary' className='w-50' onClick={() => navigate('/catatantabungan')}>Batal</Button>
                            </Col>
                            <Col md='6' className='d-flex justify-content-end align-items-center'>
                                <Button variant='primary' type='submit' className='w-50'>Buat Tabungan</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default TabunganPribadi;