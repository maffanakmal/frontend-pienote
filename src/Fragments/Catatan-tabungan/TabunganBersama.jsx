import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import ProfileNavbarComp from '../../components/ProfileNavbarComp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TabunganBersama = () => {
    const [values, setValues] = useState({
        saving_name: '',
        description: '',
        target: '',
        place_saving: '',
        dateline: '',
        friends: [''],
        notification: '',
        wishlist: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/tabunganbersama', values, { withCredentials: true })
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error);
                    setShow(true);
                    setTimeout(() => {
                        setShow(false);
                    }, 5000);
                } else {
                    setSuccess('Group saving has been created!');
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
                                    <Form.Label htmlFor='' className="form-label">Nama Tabungan</Form.Label>
                                    <input
                                        type="text"
                                        value={values.saving_name}
                                        onChange={(e) => setValues({ ...values, saving_name: e.target.value })}
                                        className="form-control fw-light rounded-2"
                                        placeholder='Masukan nama tabungan'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Keterangan Tabungan</Form.Label>
                                    <textarea
                                        rows="4"
                                        value={values.description}
                                        onChange={(e) => setValues({ ...values, description: e.target.value })}
                                        className="form-control fw-light rounded-2"
                                        placeholder='Masukan keterangan tabungan'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Target Tabungan</Form.Label>
                                    <input
                                        type="number"
                                        value={values.target}
                                        onChange={(e) => setValues({ ...values, target: e.target.value })}
                                        className="form-control fw-light rounded-2"
                                        placeholder='Masukan target tabungan'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Dimana Menyimpan Tabungan</Form.Label>
                                    <input
                                        type="text"
                                        value={values.place_saving}
                                        onChange={(e) => setValues({ ...values, place_saving: e.target.value })}
                                        className="form-control fw-light rounded-2"
                                        placeholder='Masukan tempat menyimpan'
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md='6'>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Tanggal Berakhir Tabungan</Form.Label>
                                    <input
                                        type="date"
                                        value={values.dateline}
                                        onChange={(e) => setValues({ ...values, dateline: e.target.value })}
                                        className="form-control fw-light rounded-2"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <label className="form-label">Tambah Teman</label>
                                    {values.friends.map((friend, friendindex) => (
                                        <div key={friendindex} className="d-flex mb-2 align-items-center">
                                            <input
                                                type="text"
                                                value={friend}
                                                onChange={e => handleFriendChange(friendindex, e.target.value)}
                                                className="form-control fw-light rounded-2"
                                                placeholder='Masukan teman anda'
                                                required
                                            />
                                            <Button
                                                variant="danger"
                                                onClick={() => removeFriendField(friendindex)}
                                                disabled={values.friends.length === 1}
                                                className="ms-2"
                                            ><i className="fa-solid fa-trash"></i></Button>
                                        </div>
                                    ))}
                                    <Button variant="secondary" onClick={addFriendField} className="mt-2">
                                        <i className="fa-solid fa-plus"></i>
                                    </Button>
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

export default TabunganBersama;
