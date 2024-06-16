import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const TabunganDetail = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header as="h5">DP Rumah</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="targetTabungan">
                                    <Form.Label>Target Tabungan</Form.Label>
                                    <Form.Control type="text" value="Rp20.000.000" readOnly />
                                </Form.Group>

                                <Form.Group controlId="keteranganTabungan">
                                    <Form.Label>Keterangan Tabungan</Form.Label>
                                    <Form.Control as="textarea" rows={3} value="DP rumah di summarecon bogor" readOnly />
                                </Form.Group>

                                <Form.Group controlId="menyimpanTabungan">
                                    <Form.Label>Dimana Menyimpan Tabungan</Form.Label>
                                    <Form.Control type="text" value="Bank BNI" readOnly />
                                </Form.Group>

                                <Form.Group controlId="tanggalBerakhir">
                                    <Form.Label>Tanggal Berakhir Tabungan</Form.Label>
                                    <Form.Control type="text" value="25 Desember 2024" readOnly />
                                </Form.Group>

                                <Form.Group controlId="pemberitahuan">
                                    <Form.Label>Pemberitahuan</Form.Label>
                                    <div>
                                        <Form.Check inline type="radio" label="Hari" name="pemberitahuan" id="hari" />
                                        <Form.Check inline type="radio" label="Minggu" name="pemberitahuan" id="minggu" defaultChecked />
                                        <Form.Check inline type="radio" label="Bulan" name="pemberitahuan" id="bulan" />
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="wishlist">
                                    <Form.Label>Jadikan Wishlist</Form.Label>
                                    <div>
                                        <Form.Check inline type="radio" label="Iya" name="wishlist" id="iya" />
                                        <Form.Check inline type="radio" label="Tidak" name="wishlist" id="tidak" defaultChecked />
                                    </div>
                                </Form.Group>

                                <Button variant="primary" type="button">
                                    Update
                                </Button>
                                <Button variant="secondary" type="button" className="ml-2" onClick={() => navigate('/catatantabungan')}>
                                    Cancel
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header as="h5">Pemasukan</Card.Header>
                        <Card.Body>
                            <h3>Rp 7.500.000</h3>
                            <ul className="list-unstyled">
                                {[
                                    { date: '28 April 2024', amount: 'Rp 1.500.000' },
                                    { date: '5 Mei 2024', amount: 'Rp 1.500.000' },
                                    { date: '12 Mei 2024', amount: 'Rp 1.500.000' },
                                    { date: '19 Mei 2024', amount: 'Rp 1.500.000' },
                                    { date: '26 Mei 2024', amount: 'Rp 1.500.000' },
                                ].map((entry, index) => (
                                    <li key={index} className="mb-2">
                                        <Card>
                                            <Card.Body>
                                                <Row>
                                                    <Col>{entry.date}</Col>
                                                    <Col className="text-right">{entry.amount}</Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TabunganDetail;