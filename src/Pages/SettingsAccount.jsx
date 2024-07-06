import { Alert, Spinner, Form, Col, Row, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileNavbarComp from '../components/ProfileNavbarComp'

const SettingsAccount = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

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

    return (
        <>
        <ProfileNavbarComp />
            <section className="d-flex align-items-center justify-content-center min-vh-100">
                <Container className="my-5">
                    {/* Title */}
                    <Row>
                        <div className="d-flex align-items-center text-start">
                            <Link onClick={() => navigate('/profilesetting')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                </svg>
                            </Link>
                            <h4 className="mt-2">Pengaturan Akun</h4>
                        </div>
                    </Row>

                    {/* Profile */}
                    <Row className="d-flex flex-column gap-3 text-center mt-5">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </div>
                        <div>
                            <Button variant="primary" size="xxl">
                                Ubah
                            </Button>
                        </div>
                    </Row>

                    {/* Form Input */}
                    <Row className="d-flex justify-content-center mt-5">
                        <Row className="d-flex justify-content-center">
                            <Row sm={2} className="d-flex justify-content-center">
                                <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                                    <h5>Success! </h5>
                                    <p>Data telah berhasil diperbarui!</p>
                                </Alert>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nama Lengkap</Form.Label>
                                        <Form.Control type="text" placeholder="..." required />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="..." required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="..." required />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nomor Handphone</Form.Label>
                                        <Form.Control type="text" placeholder="..." required />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Row>
                    </Row>

                    {/* Button */}
                    <Row className="d-flex gap-3 justify-content-center">
                        <div className="d-flex align-items-center gap-4 justify-content-center my-5">
                            <Button variant="primary" size="xl" disabled={isLoading} onClick={handleClick}>
                                {isLoading ? <Spinner animation="border" size="sm" /> : "Update"}
                            </Button>
                            <Button onClick={() => navigate('/accountsetting')} variant="outline-dark" size="xl">
                                Cancel
                            </Button>
                        </div>
                    </Row>
                </Container>
            </section>
            </>
    );
};

export default SettingsAccount;