import React from 'react';
import DataTable from 'react-data-table-component';
import { columns, data as tableData } from '../../assets/Js/catatan-keuangan'; // Renamed to tableData
import { Row, Col, Button } from 'react-bootstrap'
import {
    Chart as ChartJs,
    ArcElement,
    Legend,
    Tooltip,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(
    ArcElement,
    Legend,
    Tooltip,
)

const customStyles = {
    table: {
        style: {
            border: '1px solid #ccc',
        },
    },
    headRow: {
        style: {

        },
    },
    rows: {
        style: {

        },

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

const CatatanPemasukan = () => {
    const chartData = { // Renamed to chartData
        labels: ['Gaji', 'Top-up E-wallet', 'Top-up Bank', 'Transfer'],
        datasets: [{
            label: 'Laporan Keuangan',
            data: [65, 59, 80, 81],
            backgroundColor: ['green', 'cyan', 'blue', 'magenta'],
            borderColor: ['green', 'cyan', 'blue', 'magenta'],
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow the chart to resize without maintaining the aspect ratio
    };

    return (
        <>
            <div className='mb-3 d-flex justify-content-center'>
                <div className='info-siklus d-flex justify-content-center'>
                    <div className='siklus-keuangan text-center'>
                        <h5 className='text-white'>Siklus Laporan Saat Ini</h5>
                        <p className='text-white mt-1'>1 April 2024 - 20 Juni 2024</p>
                    </div>
                    <div className='siklus-keuangan d-flex align-items-center'>
                        <Button className='btn-ubahsiklus fw-bolder'>Ubah Siklus</Button>
                    </div>
                </div>
            </div>
            <Row className='info-keuangan d-flex justify-content-center mb-3'>
                <Col md="4" className='d-flex justify-content-center'>
                    <div className="card-keuangan">
                        <h5>Pemasukan</h5>
                        <p className='fw-bold fs-4 mt-1'><span>+</span>Rp. 35.000.000</p>
                    </div>
                </Col>
                <Col md="4" className='d-flex justify-content-center'>
                    <div className="card-keuangan">
                        <h5>Pengeluaran</h5>
                        <p className='fw-bold fs-4 mt-1'><span>-</span>Rp. 35.000.000</p>
                    </div>
                </Col>
                <Col md="4" className='d-flex justify-content-center'>
                    <div className="card-keuangan">
                        <h5>Selisih</h5>
                        <p className='fw-bold fs-4 mt-1'>Rp. 35.000.000</p>
                    </div>
                </Col>
            </Row>
            <h4 className='text-center'>Riwayat Keuangan Terkini</h4>
            <div className="col-md-6 left-side">
                <div className='row align-items-center p-4 rounded'>
                    <DataTable
                        columns={columns}
                        data={tableData} // Corrected reference to tableData
                        pagination
                        customStyles={customStyles}
                    />
                </div>
            </div>
            <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column right-side">
                <div className="chart-info mb-3">
                    <Doughnut
                        data={chartData} // Corrected reference to chartData
                        options={options} // Corrected reference to options
                    />
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center '>
                <Button className=''>Cetak Laporan Keuangan</Button>
            </div>
        </>
    );
}

export default CatatanPemasukan;
