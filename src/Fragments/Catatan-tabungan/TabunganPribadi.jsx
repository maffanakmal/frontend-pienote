import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import ProfileNavbarComp from '../../components/ProfileNavbarComp';
import { useNavigate } from 'react-router-dom';

const TabunganPribadi = () => {

  const navigate = useNavigate()

    return (<>
        <ProfileNavbarComp />
        <Container className="tabunganpribadi-container min-vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop: '20px' }}>
            <div className='w-100' style={{ maxWidth: '800px', backgroundColor: '#d1e7ff', padding: '20px', borderRadius: '10px' }}>
                <h2 className="text-center mb-4">Buat Tabungan Baru</h2>
                <Form>
                    <Row>
                        <Col sm="6">
                            <Form.Group controlId="formSavingsName">
                                <Form.Label>Nama Tabungan</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan nama tabungan" />
                            </Form.Group>
                        </Col>
                        <Col sm="6">
                            <Form.Group controlId="formEndDate">
                                <Form.Label>Tanggal Berakhir Tabungan</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="6">
                            <Form.Group controlId="formSavingsDescription">
                                <Form.Label>Keterangan Tabungan (Opsional)</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Masukkan keterangan tabungan" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="6">
                            <Form.Group controlId="formTarget">
                                <Form.Label>Target Tabungan</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan target tabungan" />
                            </Form.Group>
                        </Col>
                        <Col sm="6">
                            <Form.Group controlId="formSavingsLocation">
                                <Form.Label>Dimana Menyimpan Tabungan</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan lokasi penyimpanan" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group controlId="formNotification">
                        <Form.Label>Pemberitahuan</Form.Label>
                        <div>
                            <Form.Check inline type="radio" label="Hari" name="notification" id="day" />
                            <Form.Check inline type="radio" label="Minggu" name="notification" id="week" />
                            <Form.Check inline type="radio" label="Bulan" name="notification" id="month" />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formWishlist">
                        <Form.Label>Jadikan Wishlist</Form.Label>
                        <div>
                            <Form.Check inline type="radio" label="Iya" name="wishlist" id="yes" />
                            <Form.Check inline type="radio" label="Tidak" name="wishlist" id="no" />
                        </div>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="secondary" onClick={() => navigate('/catatantabungan')} type="submit">Kembali</Button>
                        <Button variant="primary" type="submit">Buat Tabungan</Button>
                    </div>
                </Form>
            </div>
        </Container>
    </>
    );
}

export default TabunganPribadi;