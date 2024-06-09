import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Button, Table } from 'react-bootstrap';
import CatatanPemasukanModal from '../../components/CatatanPemasukanModal';
import {
    Chart as ChartJs,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

ChartJs.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
);

// Styling Table
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

const CatatanPemasukan = () => {

    // Chart dataset
    const chartData = {
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        datasets: [{
            label: 'My First dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow the chart to resize without maintaining the aspect ratio
    };

    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const fetchPemasukan = async (setData, setTotalAmount) => {
        try {
            const response = await axios.get('http://localhost:8000/catatankeuangan/pemasukan', {
                withCredentials: true
            });
            setData(response.data.pemasukan);

            const total = response.data.pemasukan.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
            setTotalAmount(total.toFixed(2));
        } catch (error) {
            console.error('Error fetching pemasukan data:', error);
        }
    };

    useEffect(() => {
        fetchPemasukan(setData, setTotalAmount); // Pass setData and setTotalAmount here
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: 'user_id',
            sortable: true,
        },
        {
            name: 'Amount',
            selector: 'amount',
            sortable: true,
        },
        {
            name: 'Income Category',
            selector: 'income_category',
            sortable: true,
        },
        {
            name: 'Description',
            selector: 'description',
            sortable: true,
        },
        {
            name: 'Date',
            selector: 'date',
            sortable: true,
        },
    ];

    return (
        <>
            <div className='rounded-3 mb-3'>
                <div className='nominal-info mx-auto'>
                    <h3 className='fw-bold text-white text-center'>Rp. {totalAmount}</h3>
                </div>
            </div>
            <h4 className='text-center'>Pemasukan Terkini</h4>
            <div className="col-md-6 left-side">
                <div className='row align-items-center p-4 rounded'>
                    {/* <DataTable
                        columns={columns}
                        data={data} // Corrected reference to tableData
                        pagination
                        customStyles={customStyles}
                    /> */}

                    <Table striped bordered hover>
                        <thead>
                            <tr className='text-center'>
                                <th>Nominal</th>
                                <th>Deskripsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length > 0 && data.slice(0, 5).map((pemasukan, index) => {
                                return (
                                    <tr key={index} className='text-center'>
                                        <td>
                                            <h5>{pemasukan.amount}</h5>
                                            <p>{pemasukan.description}</p>
                                        </td>
                                        <td>{pemasukan.date}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column right-side">
                <div className="chart-info mb-3">
                    <Line
                        data={chartData} // Corrected reference to chartData
                        options={options} // Corrected reference to options
                    />
                </div>
                <div>
                    <Button className="btn-buatcatatan w-auto" onClick={() => setShow(true)}>
                        Buat catatan baru
                    </Button>
                </div>
            </div>
            <CatatanPemasukanModal show={show} setShow={setShow} />
        </>
    );
}

export default CatatanPemasukan;
