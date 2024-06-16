import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import Layouts from "./Layout";

const AccountPage = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        // Menampilkan loading
        setIsLoading(true);

        // Mengatur timeout untuk menampilkan alert setelah beberapa waktu
        setTimeout(() => {
            // Menyembunyikan loading
            setIsLoading(false);
            // Menampilkan alert
            setShowAlert(true);
        }, 2000); // Contoh: Menunggu 2 detik sebelum menampilkan alert
    };

    const btnAccount = () => {
        window.location.href = "/account";
    };

    const btnCatatanTabungan = () => {
        window.location.href = "/catatanTabungan";
    };

    const btnCatatanKeuangan = () => {
        window.location.href = "/catatanKeuangan";
    };

    return (
        <Layouts>
            <section className="block">
                <Container fluid>
                    <Row className="d-flex gap-5 pt-5">
                        <Col sm={3} className="d-flex flex-column shadow-sm block vh-100">
                            <div className="d-flex align-items-center text-start mb-5">
                                <Link to={""}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="d-flex flex-column gap-1 mt-5">
                                <Button onClick={btnAccount} variant="primary" size="xl" className="hover text-start" active>
                                    Akun
                                </Button>
                                <Button onClick={btnCatatanTabungan} variant="outline-primary" size="xl" className="hover text-start shadow-sm">
                                    Catatan Tabungan
                                </Button>
                                <Button onClick={btnCatatanKeuangan} variant="outline-primary" size="xl" className="hover text-start shadow-sm">
                                    Catatan Keuangan
                                </Button>
                            </div>
                        </Col>

                        <Col sm={7}>
                            <h4>Pengaturan Kata Sandi</h4>
                            <Row className="mt-5">
                                <Col sm={7}>
                                    <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                                        <h5>Success! </h5>
                                        <p>Password telah berhasil diperbarui!</p>
                                    </Alert>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kata Sandi Lama</Form.Label>
                                        <Form.Control type="password" placeholder="..." />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kata Sandi Baru</Form.Label>
                                        <Form.Control type="password" placeholder="..." />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Konfirmasi Kata Sandi Baru</Form.Label>
                                        <Form.Control type="password" placeholder="..." />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="d-flex gap-3">
                                <div className="d-flex align-items-center gap-4">
                                    <Button variant="primary" size="xl" disabled={isLoading} onClick={handleClick}>
                                        {isLoading ? <Spinner animation="border" size="sm" /> : "Update"}
                                    </Button>
                                    <Button variant="outline-dark" size="xl">
                                        Cancel
                                    </Button>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layouts>
    );
};
export default AccountPage;