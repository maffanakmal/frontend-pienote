import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Button, Table, Modal, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    Chart as ChartJs,
    ArcElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(
    ArcElement,
    Legend,
    Tooltip,
);

const customStyles = {
    table: {
        style: {
            border: '1px solid #ccc',
        },
    },
    headRow: {
        style: {},
    },
    rows: {
        style: {},
    },
    headCells: {
        style: {
            justifyContent: 'center', // Centers the text in the cells
            textAlign: 'center',
            fontSize: '16px',
        },
    },
    cells: {
        style: {
            justifyContent: 'center', // Centers the text in the cells
            textAlign: 'center', // Ensures the text is centered
            fontSize: '16px',
            whiteSpace: 'normal',
        },
    },
};

const LaporanKeuangan = () => {
    const [dataPemasukan, setDataPemasukan] = useState([]);
    const [dataPengeluaran, setDataPengeluaran] = useState([]);
    const [totalPemasukanAmount, setTotalPemasukanAmount] = useState(0);
    const [totalPengeluaranAmount, setTotalPengeluaranAmount] = useState(0);
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [showModal, setShowModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date('2024-04-01'));
    const [endDate, setEndDate] = useState(new Date('2024-06-20'));

    const fetchLaporanKeuangan = async () => {
        try {
            const response = await axios.post('http://localhost:8000/catatankeuangan/laporan', {
                start_date: startDate,
                end_date: endDate
            }, {
                withCredentials: true
            });

            setDataPemasukan(response.data.pemasukan);
            setDataPengeluaran(response.data.pengeluaran);

            const totalPemasukan = response.data.pemasukan.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
            const totalPengeluaran = response.data.pengeluaran.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

            setTotalPemasukanAmount(totalPemasukan.toFixed(2));
            setTotalPengeluaranAmount(totalPengeluaran.toFixed(2));

            processChartData(response.data.pemasukan, response.data.pengeluaran);
        } catch (error) {
            console.error('Error fetching laporan keuangan data:', error);
        }
    };

    const processChartData = (pemasukan, pengeluaran) => {
        const categories = {};
        pemasukan.forEach(item => {
            if (!categories[item.income_category]) {
                categories[item.income_category] = 0;
            }
            categories[item.income_category] += parseFloat(item.amount);
        });

        pengeluaran.forEach(item => {
            if (!categories[item.expense_category]) {
                categories[item.expense_category] = 0;
            }
            categories[item.expense_category] += parseFloat(item.amount);
        });

        const labels = Object.keys(categories);
        const data = Object.values(categories);

        setChartData({
            labels: labels,
            datasets: [{
                label: 'Laporan Keuangan',
                data: data,
                backgroundColor: ['green', 'cyan', 'blue', 'magenta', 'red', 'orange', 'purple', 'yellow'],
                borderColor: ['green', 'cyan', 'blue', 'magenta', 'red', 'orange', 'purple', 'yellow'],
            }]
        });
    };

    useEffect(() => {
        fetchLaporanKeuangan();
    }, [startDate, endDate]);

    const combinedData = [...dataPemasukan, ...dataPengeluaran]
        .filter(item => new Date(item.date) >= startDate && new Date(item.date) <= endDate)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(item => ({
            ...item,
            type: dataPemasukan.includes(item) ? 'Pemasukan' : 'Pengeluaran'
        }));

    const formatAmount = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 2
        }).format(amount);
    };

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleDateChange = () => {
        handleCloseModal();
        fetchLaporanKeuangan();
    };

    return (
        <>
            <div className='mb-3 d-flex justify-content-center'>
                <div className='info-siklus d-flex justify-content-center'>
                    <div className='siklus-keuangan text-center'>
                        <h5 className='text-white'>Siklus Laporan Saat Ini</h5>
                        <p className='text-white mt-1'>{formatDate(startDate)} - {formatDate(endDate)}</p>
                    </div>
                    <div className='siklus-keuangan d-flex align-items-center'>
                        <Button className='btn-ubahsiklus fw-bolder w-auto' onClick={handleShowModal}>Ubah Siklus</Button>
                    </div>
                </div>
            </div>
            <Row className='info-keuangan d-flex justify-content-center mb-3'>
                <Col md="4" className='d-flex justify-content-center'>
                    <div className="card-keuangan">
                        <h5>Pemasukan</h5>
                        <p className='fw-bold fs-4 mt-1'><span>+</span>{formatAmount(totalPemasukanAmount)}</p>
                    </div>
                </Col>
                <Col md="4" className='d-flex justify-content-center'>
                    <div className="card-keuangan">
                        <h5>Pengeluaran</h5>
                        <p className='fw-bold fs-4 mt-1'><span>-</span>{formatAmount(totalPengeluaranAmount)}</p>
                    </div>
                </Col>
                <Col md="4" className='d-flex justify-content-center'>
                    <div className="card-keuangan">
                        <h5>Selisih</h5>
                        <p className='fw-bold fs-4 mt-1'>{formatAmount((totalPemasukanAmount - totalPengeluaranAmount).toFixed(2))}</p>
                    </div>
                </Col>
            </Row>
            <h4 className='text-center'>Riwayat Keuangan Terkini</h4>
            <div className="col-md-6 left-side">
                <div className='row align-items-center p-4 rounded'>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='text-center'>
                                <th>Nominal & Deskripsi</th>
                                <th>Tanggal</th>
                                <th>Jenis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {combinedData && combinedData.length > 0 && combinedData.slice(0, 5).map((item, index) => {
                                return (
                                    <tr key={index} className='text-center'>
                                        <td>
                                            <h5>{formatAmount(item.amount)}</h5>
                                            <p>{item.description}</p>
                                        </td>
                                        <td>{formatDate(item.date)}</td>
                                        <td>{item.type}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column right-side">
                <div className="chart-info mb-3">
                    <Doughnut
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                        }} 
                    />
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center '>
                <Button className='w-auto'>Cetak Laporan Keuangan</Button>
            </div>

            {/* Modal for changing reporting cycle */}
            <Modal show={showModal} onHide={handleCloseModal} dialogClassName="modal-dialog-centered" aria-labelledby="login-modal">
                <Modal.Header closeButton>
                    <Modal.Title className='text-white'>Ubah Siklus Laporan Keuangan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label className='text-white'>Tanggal Mulai</Form.Label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='text-white'>Tanggal Selesai</Form.Label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Batal
                    </Button>
                    <Button variant="primary" onClick={handleDateChange}>
                        Simpan Perubahan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LaporanKeuangan;
