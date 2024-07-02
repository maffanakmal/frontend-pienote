import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import ProfileNavbarComp from '../../components/ProfileNavbarComp';
import { useNavigate } from 'react-router-dom';

const TabunganPribadi = () => {

    const navigate = useNavigate()

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
                        </Col>
                        <Col md='6'>
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

export default TabunganPribadi;