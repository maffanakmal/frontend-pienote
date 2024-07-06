import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import ProfileNavbarComp from '../../components/ProfileNavbarComp'

const CatatanKeuanganPage = () => {
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
        window.location.href = "/passwordaccount";
    };

    const btnCatatanTabungan = () => {
        window.location.href = "/passwordtabungan";
    };

    const btnCatatanKeuangan = () => {
        window.location.href = "/passwordkeuangan";
    };

    const navigate = useNavigate()

    return (
        <>
            <ProfileNavbarComp />
            <section  className="d-flex align-items-center justify-content-center pt-5 min-vh-100">
                <Container>
                    <Row className="d-flex gap-5 pt-5">
                        <Col sm={3} className="d-flex flex-column shadow-sm block vh-100">
                            <div className="d-flex align-items-center text-start mb-5">
                                <Link onClick={() => navigate('/profilesetting')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="d-flex flex-column gap-1 mt-5">
                                <Button onClick={btnAccount} variant="outline-primary" size="xl" className="text-start shadow-sm">
                                    Akun
                                </Button>
                                <Button onClick={btnCatatanTabungan} variant="outline-primary" size="xl" className="text-start shadow-sm">
                                    Catatan Tabungan
                                </Button>
                                <Button onClick={btnCatatanKeuangan} variant="primary" size="xl" className="text-start shadow-sm" active>
                                    Catatan Keuangan
                                </Button>
                            </div>
                        </Col>

                        <Col sm={7}>
                            <h4>Catatan Keuangan</h4>
                            <Row className="mt-5 d-flex flex-column justify-content-center text-center">
                                <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                                    <h5>Success! </h5>
                                    <p>Selamat datang di Catatan Keuangan, Jidan Ilham!</p>
                                </Alert>
                                <h4>Enter Password Code</h4>
                                <p>Please enter any 4 digit that you will use to unblock your money notes</p>
                                <div className="d-flex gap-5 mx-auto">
                                    <Form.Control type="text" placeholder="" className="bg-secondary bg-opacity-25 text-center" />
                                    <Form.Control type="text" placeholder="" className="bg-secondary bg-opacity-25 text-center" />
                                    <Form.Control type="text" placeholder="" className="bg-secondary bg-opacity-25 text-center" />
                                    <Form.Control type="text" placeholder="" className="bg-secondary bg-opacity-25 text-center" />
                                </div>
                            </Row>
                            <Row className="d-flex gap-4 justify-content-center my-5 text-center">
                                <div className="d-flex justify-content-center align-items-center gap-4">
                                    <Button variant="primary" size="lg" className="px-4">
                                        1
                                    </Button>
                                    <Button variant="primary" size="lg" className="px-4">
                                        2
                                    </Button>
                                    <Button variant="primary" size="lg" className="px-4">
                                        3
                                    </Button>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-4">
                                    <Button variant="primary" size="lg" className="px-4">
                                        4
                                    </Button>
                                    <Button variant="primary" size="lg" className="px-4">
                                        5
                                    </Button>
                                    <Button variant="primary" size="lg" className="px-4">
                                        6
                                    </Button>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-4">
                                    <Button variant="primary" size="lg" className="px-4">
                                        7
                                    </Button>
                                    <Button variant="primary" size="lg" className="px-4">
                                        8
                                    </Button>
                                    <Button variant="primary" size="lg" className="px-4">
                                        9
                                    </Button>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-4">
                                    <Button variant="primary" size="lg" className="px-4">
                                        C
                                    </Button>
                                    <Button variant="primary" size="lg" className="px-4">
                                        0
                                    </Button>
                                    <Button variant="primary" size="lg" className="px-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
                                            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                                            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                                        </svg>
                                    </Button>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-4">
                                    <Button variant="primary" size="xl" disabled={isLoading} onClick={handleClick}>
                                        {isLoading ? <Spinner animation="border" size="sm" /> : "Submit"}
                                    </Button>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};
export default CatatanKeuanganPage;