import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

const CatatanKeuangModal = ({ show, setShow }) => {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
                dialogClassName="modal-dialog-centered" // Add modal-dialog-centered class here
                aria-labelledby="login-modal"
            >
                <Modal.Header>
                    <Modal.Title className='text-white'>Catatan Pengeluaran</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md='6'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='text-white'>Jumlah</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Masukkan nominal"
                                        autoFocus
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md='6'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='text-white'>Tanggal</Form.Label>
                                    <Form.Control
                                        type="date"
                                        autoFocus
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Pilih Kategori</Form.Label>
                            <Form.Control as="select" name="katPemasukan" id="katPemasukan" required>
                                <option value="gaji">Gaji</option>
                                <option value="ewallet">E-wallet</option>
                                <option value="bank">Bank</option>
                                <option value="transfer">Transfer</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Catatan</Form.Label>
                            <Form.Control as="textarea" placeholder='Masukkan Catatan' rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Batal
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Buat Catatan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CatatanKeuangModal