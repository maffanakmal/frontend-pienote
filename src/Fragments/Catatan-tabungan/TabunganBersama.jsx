import React, {useState} from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import ProfileNavbarComp from '../../components/ProfileNavbarComp';
import { useNavigate } from 'react-router-dom';

const TabunganBersama = () => {
    const [values, setValues] = useState({
        friends: [''], // Default to one friend input
    });

    const navigate = useNavigate()

    const addFriendField = () => {
        setValues({ ...values, friends: [...values.friends, ''] });
    };

    const removeFriendField = (index) => {
        if (values.friends.length > 1) {
            const newFriends = values.friends.filter((_, i) => i !== index);
            setValues({ ...values, friends: newFriends });
        }
    };


    return (<>
        <ProfileNavbarComp />
        <Container className="tabunganpribadi-container min-vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop: '100px' }}>
            <div className='w-100 rounded-3' style={{ maxWidth: '70%', backgroundColor: '#d1e7ff', padding: '50px' }}>
                <h3 className="text-center mb-4">Buat Tabungan Baru</h3>
                <Form>
                    <Row className='splitbill-input-row mt-3 p-4'>
                        <Col md='6'>
                            <Form.Group className='mb-3'>
                                <Form.Label htmlFor='' className="form-label">Nama Tabungan</Form.Label>
                                <input
                                    type="text"
                                    name=''
                                    className="form-control fw-light rounded-2"
                                    id=''
                                    placeholder='Masukan nama tabungan'

                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label htmlFor='' className="form-label">Keterangan Tabungan</Form.Label>
                                <textarea
                                    type="text"
                                    rows="4" 
                                    cols="50"
                                    name=''
                                    className="form-control fw-light rounded-2"
                                    id=''
                                    placeholder='Masukan keterangan tabungan'
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label htmlFor='' className="form-label">Target Tabungan</Form.Label>
                                <input
                                    type="text"
                                    name=''
                                    className="form-control fw-light rounded-2"
                                    id=''
                                    placeholder='Masukan target tabungan'

                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label htmlFor='' className="form-label">Dimana Menyimpan Tabungan</Form.Label>
                                <input
                                    type="text"
                                    name=''
                                    className="form-control fw-light rounded-2"
                                    id=''
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
                                    name=''
                                    className="form-control fw-light rounded-2"
                                    id=''
                                    placeholder='Masukan nama tabungan'

                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
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
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Pemberitahuan</Form.Label>
                                <div>
                                    <Form.Check inline type="radio" label="Hari" name="notification" id="day" />
                                    <Form.Check inline type="radio" label="Minggu" name="notification" id="week" />
                                    <Form.Check inline type="radio" label="Bulan" name="notification" id="month" />
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Jadikan Wishlist</Form.Label>
                                <div>
                                    <Form.Check inline type="radio" label="Iya" name="wishlist" id="yes" />
                                    <Form.Check inline type="radio" label="Tidak" name="wishlist" id="no" />
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Row className='mt-3'>
                        <Col md='6' className='d-flex justify-content-start align-items-center'>
                            <Button variant='secondary' className='w-50' onClick={() => navigate('/catatantabungan')}>Batal</Button>
                        </Col>
                        <Col md='6' className='d-flex justify-content-end align-items-center'>
                            <Button variant='primary' type='submit' className='w-50'>Buat Tabungan</Button>
                        </Col>
                    </Row>
            </div>
        </Container>
    </>
    );
}

export default TabunganBersama;