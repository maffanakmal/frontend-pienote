import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert, Table } from 'react-bootstrap';
import ProfileNavbarComp from '../../components/ProfileNavbarComp';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const TabunganDetailPribadi = () => {
    const { personalsaving_id } = useParams(); // Get personalsaving_id from URL params
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
    const [currentSavings, setCurrentSavings] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [newSaving, setNewSaving] = useState({
        add_current_saving: '',
        date: ''
    });
    const navigate = useNavigate();

    // Fetch data from backend when component mounts
    useEffect(() => {
        console.log("Fetching data for personalsaving_id:", personalsaving_id);

        axios.get(`http://localhost:8000/detailtabunganpribadi/${personalsaving_id}`, { withCredentials: true })
            .then(res => {
                const { saving_name, description, target, place_saving, dateline, notification, wishlist } = res.data;
                setValues({
                    saving_name,
                    description,
                    target,
                    place_saving,
                    dateline: dateline.substring(0, 10), // Format date for input type date
                    notification,
                    wishlist
                });
            })
            .catch(err => {
                console.error('Error fetching personal savings:', err);
                setError('Failed to fetch personal savings.');
                setShow(true);
            });

        axios.get(`http://localhost:8000/detailtabunganpribadi/${personalsaving_id}/currentsavings`, { withCredentials: true })
            .then(res => {
                const sortedData = res.data.current_savings.sort((a, b) => new Date(b.date) - new Date(a.date));
                setCurrentSavings(sortedData);
                const total = sortedData.reduce((acc, curr) => acc + parseFloat(curr.add_current_saving), 0);
                setTotalAmount(total.toFixed(2));
            })
            .catch(err => {
                console.error('Error fetching current savings:', err);
                setError('Failed to fetch current savings.');
                setShow(true);
            });
    }, [personalsaving_id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/detailtabunganpribadi/${personalsaving_id}`, values, { withCredentials: true })
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error);
                    setShow(true);
                } else {
                    setSuccess('Personal saving has been updated!');
                    setShow(true);
                    // Optionally navigate to another page upon successful update
                    setTimeout(() => {
                        navigate('/catatantabungan');
                    }, 2000);
                }
            })
            .catch(err => {
                const errorMessage = err.response && err.response.data && err.response.data.error
                    ? err.response.data.error
                    : 'An unexpected error occurred';
                setError(errorMessage);
                setShow(true);
            });
    };

    const handleAddCurrentSaving = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/detailtabunganpribadi/${personalsaving_id}/currentsavings`, newSaving, { withCredentials: true })
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error);
                    setShow(true);
                } else {
                    setSuccess('Current saving has been added!');
                    setShow(true);
                    const updatedSavings = [...currentSavings, newSaving].sort((a, b) => new Date(b.date) - new Date(a.date));
                    setCurrentSavings(updatedSavings);
                    const total = updatedSavings.reduce((acc, curr) => acc + parseFloat(curr.add_current_saving), 0);
                    setTotalAmount(total.toFixed(2));
                    setNewSaving({ add_current_saving: '', date: '' });
                }
            })
            .catch(err => {
                const errorMessage = err.response && err.response.data && err.response.data.error
                    ? err.response.data.error
                    : 'An unexpected error occurred';
                setError(errorMessage);
                setShow(true);
            });
    };

    const handleDelete = () => {
        if (window.confirm(`Apakah Anda yakin ingin menghapus tabungan '${values.saving_name}'?`)) {
            axios.delete(`http://localhost:8000/detailtabunganpribadi/${personalsaving_id}`, { withCredentials: true })
                .then(res => {
                    if (res.data.message) {
                        setSuccess('Personal saving has been deleted!');
                        setShow(true);
                        setTimeout(() => {
                            navigate('/catatantabungan');
                        }, 2000);
                    }
                })
                .catch(err => {
                    const errorMessage = err.response && err.response.data && err.response.data.error
                        ? err.response.data.error
                        : 'An unexpected error occurred';
                    setError(errorMessage);
                    setShow(true);
                });
        }
    };
    

    // Function to format amount
    const formatAmount = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 2
        }).format(amount);
    };

    return (
        <>
            <ProfileNavbarComp />
            <Container className="tabunganpribadi-container min-vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop: '100px' }}>
                <Col md='6' className='mx-3 rounded-3' style={{ maxWidth: 'auto', backgroundColor: '#d1e7ff', padding: '50px' }}>
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
                        <div className='d-flex align-items-center justify-content-between'>
                            <h3>Nama Tabungan</h3>
                            <Button variant='danger' onClick={handleDelete}>
                                <p>Hapus Tabungan</p>
                            </Button>
                        </div>
                        <Row className='splitbill-input-row mt-3 p-4'>
                            <Col md='12'>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Nama Tabungan</Form.Label>
                                    <input
                                        type="text"
                                        name='saving_name'
                                        className="form-control fw-light rounded-2"
                                        id='saving_name'
                                        value={values.saving_name}
                                        onChange={(e) => setValues({ ...values, saving_name: e.target.value })}
                                        placeholder='Masukan nama tabungan'
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Keterangan Tabungan</Form.Label>
                                    <textarea
                                        rows="4"
                                        name='description'
                                        className="form-control fw-light rounded-2"
                                        id='description'
                                        value={values.description}
                                        onChange={(e) => setValues({ ...values, description: e.target.value })}
                                        placeholder='Masukan keterangan tabungan'
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Target Tabungan</Form.Label>
                                    <input
                                        type="text"
                                        name='target'
                                        className="form-control fw-light rounded-2"
                                        id='target'
                                        value={values.target}
                                        onChange={(e) => setValues({ ...values, target: e.target.value })}
                                        placeholder='Masukan target tabungan'
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Dimana Menyimpan Tabungan</Form.Label>
                                    <input
                                        type="text"
                                        name='place_saving'
                                        className="form-control fw-light rounded-2"
                                        id='place_saving'
                                        value={values.place_saving}
                                        onChange={(e) => setValues({ ...values, place_saving: e.target.value })}
                                        placeholder='Masukan tempat menyimpan'
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Tanggal Berakhir Tabungan</Form.Label>
                                    <input
                                        type="date"
                                        name='dateline'
                                        className="form-control fw-light rounded-2"
                                        id='dateline'
                                        value={values.dateline}
                                        onChange={(e) => setValues({ ...values, dateline: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Pemberitahuan</Form.Label>
                                    <div>
                                        <Form.Check inline type="radio" label="Hari" name="notification" id="Hari" checked={values.notification === 'Hari'} onChange={() => setValues({ ...values, notification: 'Hari' })} />
                                        <Form.Check inline type="radio" label="Minggu" name="notification" id="Minggu" checked={values.notification === 'Minggu'} onChange={() => setValues({ ...values, notification: 'Minggu' })} />
                                        <Form.Check inline type="radio" label="Bulan" name="notification" id="Bulan" checked={values.notification === 'Bulan'} onChange={() => setValues({ ...values, notification: 'Bulan' })} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Jadikan Wishlist</Form.Label>
                                    <div>
                                        <Form.Check inline type="radio" label="Iya" name="wishlist" id="yes" checked={values.wishlist === 1} onChange={() => setValues({ ...values, wishlist: '1' })} />
                                        <Form.Check inline type="radio" label="Tidak" name="wishlist" id="no" checked={values.wishlist === 0} onChange={() => setValues({ ...values, wishlist: '0' })} />
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col md='6' className='d-flex justify-content-start align-items-center'>
                                <Button variant='secondary' className='w-50' onClick={() => navigate('/catatantabungan')}>Batal</Button>
                            </Col>
                            <Col md='6' className='d-flex justify-content-end align-items-center'>
                                <Button variant='primary' type='submit' className='w-50'>Update</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col md='6' className='mx-3 rounded-3' style={{ maxWidth: 'auto', backgroundColor: '#d1e7ff', padding: '50px' }}>
                    <Form onSubmit={handleAddCurrentSaving}>
                        <h3>Pemasukan</h3>
                        <Row className='splitbill-input-row mt-3 p-4'>
                            <Row className='d-flex align-items-center justify-content-center mb-2'>
                                <Col md='12' className='w-75 bg-white p-3 m-2 text-center rounded-2'>
                                    <h3>{`${formatAmount(totalAmount)}`}</h3>
                                </Col>
                            </Row>
                            <Table striped bordered hover>
                                <thead>
                                    <tr className='text-center'>
                                        <th>Tanggal</th>
                                        <th>Nominal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentSavings.map((saving, index) => (
                                        <tr key={index}>
                                            <td>{saving.date}</td>
                                            <td>{formatAmount(saving.add_current_saving)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Col md='12'>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Tambah Nominal Tabungan</Form.Label>
                                    <input
                                        type="number"
                                        name='add_current_saving'
                                        className="form-control fw-light rounded-2"
                                        id='add_current_saving'
                                        value={newSaving.add_current_saving}
                                        onChange={(e) => setNewSaving({ ...newSaving, add_current_saving: e.target.value })}
                                        placeholder='Masukan nominal tabungan'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='' className="form-label">Tanggal Tabungan</Form.Label>
                                    <input
                                        type="date"
                                        name='date'
                                        className="form-control fw-light rounded-2"
                                        id='date'
                                        value={newSaving.date}
                                        onChange={(e) => setNewSaving({ ...newSaving, date: e.target.value })}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col md='6' className='d-flex justify-content-start align-items-center'>
                                <Button variant='secondary' className='w-50' onClick={() => navigate('/catatantabungan')}>Batal</Button>
                            </Col>
                            <Col md='6' className='d-flex justify-content-end align-items-center'>
                                <Button variant='primary' type='submit' className='w-50'>Tambah</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Container>
        </>
    );
}

export default TabunganDetailPribadi;
