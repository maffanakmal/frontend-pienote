import { Modal, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

const CatatanPemasukanModal = ({ show, setShow }) => {
    const [values, setValues] = useState({
        amount: '',
        income_category: '',
        description: '',
        date: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/catatankeuangan/pemasukan', values, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        })
        .then(res => {
            if (res.data.error) {
                setError(res.data.error);
                setTimeout(() => {
                    setError('');
                }, 3000);
            } else {
                setSuccess('Catatan berhasil ditambahkan');
                setTimeout(() => {
                    setSuccess('');
                    handleClose();
                }, 3000);
            }
        })
        .catch(err => {
            const errorMessage = err.response && err.response.data && err.response.data.error
                ? err.response.data.error
                : err.message || 'An unexpected error occurred';
            setError(errorMessage);
            setTimeout(() => {
                setError('');
            }, 5000);
        });
    };
    

    return (
        <Modal
            size='lg'
            show={show}
            onHide={handleClose}
            dialogClassName="modal-dialog-centered"
            aria-labelledby="login-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title className='text-white'>Catatan Pemasukan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && (
                    <Alert variant="danger" onClose={() => setError('')} dismissible>
                        <p>{error}</p>
                    </Alert>
                )}
                {success && (
                    <Alert variant="success" onClose={() => setSuccess('')} dismissible>
                        <p>{success}</p>
                    </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md='6'>
                            <Form.Group className="mb-3">
                                <Form.Label className='text-white'>Jumlah</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="amount"
                                    value={values.amount}
                                    onChange={e => setValues({ ...values, amount: e.target.value })}
                                    className="form-control fw-light"
                                    id="amount"
                                    placeholder='Masukan nominal'
                                    autoFocus
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3">
                                <Form.Label className='text-white'>date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    value={values.date}
                                    onChange={e => setValues({ ...values, date: e.target.value })}
                                    className="form-control fw-light"
                                    id="date"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                        <Form.Label className='text-white'>Pilih income_category</Form.Label>
                    <Form.Group className="mb-3">
                        <Form.Control
                            name="income_category"
                            as="select"
                            value={values.income_category}
                            onChange={e => setValues({ ...values, income_category: e.target.value })}
                            id="katPemasukan"
                            required
                        >
                            <option value="gaji">Gaji</option>
                            <option value="e-wallet">E-wallet</option>
                            <option value="bank">Bank</option>
                            <option value="transfer">Transfer</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='text-white'>Catatan</Form.Label>
                        <Form.Control
                            name='description'
                            as="textarea"
                            placeholder='Masukkan Catatan'
                            value={values.description}
                            rows={3}
                            onChange={e => setValues({ ...values, description: e.target.value })}
                        />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} className='w-auto'>
                            Batal
                        </Button>
                        <Button type="submit" variant="success" className='w-auto'>
                            Buat Catatan
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default CatatanPemasukanModal;
