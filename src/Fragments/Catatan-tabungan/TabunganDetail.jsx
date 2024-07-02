import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import ProfileNavbarComp from '../../components/ProfileNavbarComp';
import { useNavigate } from 'react-router-dom';

const TabunganDetail = () => {

    const navigate = useNavigate()

    return (
        <>
        <ProfileNavbarComp />
        <Container className="tabunganpribadi-container min-vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop: '100px' }}>
            <Col md='6' className='mx-3 rounded-3' style={{ maxWidth: 'auto', backgroundColor: '#d1e7ff', padding: '50px' }}>
                <Form>
                    <h3>Nama Tabungan</h3>
                    <Row className='splitbill-input-row mt-3 p-4'>
                        <Col md='12'>
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
                            <Button variant='primary' type='submit' className='w-50'>Update</Button>
                        </Col>
                </Row>
            </Col>
            <Col md='6' className='mx-3 rounded-3' style={{ maxWidth: 'auto', backgroundColor: '#d1e7ff', padding: '50px' }}>
                <Form>
                    <h3>Pemasukan</h3>
                    <Row className='splitbill-input-row mt-3 p-4'>
                        <Row className='d-flex align-items-center justify-content-center mb-2'>
                            <Col md='12' className='w-75 bg-white p-3 m-2 text-center rounded-2'>
                                <h3>Rp 50000000</h3>
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
                            <tr>
                                <td>23112</td>
                                <td>23112</td>
                            </tr>
                            <tr>
                                <td>23112</td>
                                <td>23112</td>
                            </tr>
                            <tr>
                                <td>23112</td>
                                <td>23112</td>
                            </tr>
                            <tr>
                                <td>23112</td>
                                <td>23112</td>
                            </tr>
                            <tr>
                                <td>23112</td>
                                <td>23112</td>
                            </tr>
                        </tbody>
                        </Table>
                        <Col md='12'>
                            <Form.Group className='mb-3'>
                                <Form.Label htmlFor='' className="form-label">Tambah Nominal Tabungan</Form.Label>
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
                        </Col>
                    </Row>
                </Form>
                <Row className='mt-3'>
                        <Col md='6' className='d-flex justify-content-start align-items-center'>
                            <Button variant='secondary' className='w-50' onClick={() => navigate('/catatantabungan')}>Batal</Button>
                        </Col>
                        <Col md='6' className='d-flex justify-content-end align-items-center'>
                            <Button variant='primary' type='submit' className='w-50'>Update</Button>
                        </Col>
                </Row>
            </Col>
        </Container>
    </>
    );
}


export default TabunganDetail;