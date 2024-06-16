import React, { useState } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProfileNavbarComp from '../components/ProfileNavbarComp';
import '../assets/Css/SplitBill.css';
import SplitBillForm from '../components/SplitBillForm';
import axios from 'axios';

const SplitBill = () => {
    const [values, setValues] = useState({
        bill_name: '',
        friends: [''], // Default to one friend input
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    const [billId, setBillId] = useState(null); // State to store the bill_id
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/berbagitagihan', values, { withCredentials: true })
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error);
                    setShow(true);
                    setTimeout(() => setShow(false), 5000);
                } else {
                    setBillId(res.data.bill_id); // Assuming backend returns the bill_id
                    setSuccess('New bill created!');
                    setShow(true);
                    setTimeout(() => setShow(false), 4000);
                }
            })
            .catch(err => {
                const errorMessage = err.response && err.response.data && err.response.data.error
                    ? err.response.data.error
                    : 'An unexpected error occurred';
                setError(errorMessage);
                setShow(true);
                setTimeout(() => setShow(false), 5000);
            });
    };
    
    const handleFriendChange = (index, value) => {
        const newFriends = [...values.friends];
        newFriends[index] = value;
        setValues({ ...values, friends: newFriends });
    };

    const addFriendField = () => {
        setValues({ ...values, friends: [...values.friends, ''] });
    };

    const removeFriendField = (index) => {
        if (values.friends.length > 1) {
            const newFriends = values.friends.filter((_, i) => i !== index);
            setValues({ ...values, friends: newFriends });
        }
    };

    return (
        <>
            <ProfileNavbarComp />
            <div className='splitbill-container w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center'>
                <h3 className='text-center mb-4'>Berbagi Tagihan</h3>
                <div className="splitbill-wrapper rounded-3 w-50">
                    <Row className='splitbill-input-row mb-4'>
                        <form onSubmit={handleSubmit}>
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
                            <div className='mb-3'>
                                <label htmlFor="bill_name" className="form-label">Nama Tagihan</label>
                                <input
                                    type="text"
                                    name="bill_name"
                                    onChange={e => setValues({ ...values, bill_name: e.target.value })}
                                    className="form-control fw-light rounded-2"
                                    id="bill_name"
                                    placeholder='Masukan nama tagihan'
                                    required
                                />
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Tambah Teman</label>
                                {values.friends.map((friend, index) => (
                                    <div key={index} className="d-flex mb-2 align-items-center">
                                        <input
                                            type="text"
                                            value={friend}
                                            onChange={e => handleFriendChange(index, e.target.value)}
                                            className="form-control fw-light rounded-2"
                                            placeholder='Masukan teman anda'
                                            required
                                        />
                                        <Button
                                            variant="danger"
                                            onClick={() => removeFriendField(index)}
                                            disabled={values.friends.length === 1}
                                            className="ms-2"
                                        ><i className="fa-solid fa-trash"></i></Button>
                                    </div>
                                ))}
                                <Button variant="secondary" onClick={addFriendField} className="mt-2">
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </div>
                            <Col md='6' className='d-flex justify-content-start align-items-center'>
                                <Button type="submit" variant='success' className='w-50'>Tambah Tagihan</Button>
                            </Col>
                        </form>
                    </Row>
                    {billId && <SplitBillForm billId={billId} friends={values.friends} />} {/* Pass billId and friends as props to SplitBillForm */}
                    <Row className='mt-3'>
                        <Col md='6' className='d-flex justify-content-start align-items-center'>
                            <Button variant='secondary' className='w-50' onClick={() => navigate('/home')}>Batal</Button>
                        </Col>
                        <Col md='6' className='d-flex justify-content-end align-items-center'>
                            <Button variant='primary' className='w-50'>Mulai Berbagi Tagihan</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default SplitBill;
