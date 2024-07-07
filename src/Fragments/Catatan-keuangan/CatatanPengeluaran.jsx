import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Button, Table } from 'react-bootstrap';
import CatatanPengeluaranModal from '../../components/CatatanPengeluaranModal';
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

const CatatanPengeluaran = () => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    const fetchPengeluaran = async () => {
        try {
            const response = await axios.get('http://localhost:5081/catatankeuangan/pengeluaran', {
                withCredentials: true
            });
            
            // Sort the data by date in descending order
            const sortedData = response.data.pengeluaran.sort((a, b) => new Date(b.date) - new Date(a.date));
            setData(sortedData);

            const total = sortedData.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
            setTotalAmount(total.toFixed(2));

            // Prepare chart data
            const labels = sortedData.map(entry => formatDate(entry.date));
            const amounts = sortedData.map(entry => parseFloat(entry.amount));
            setChartData({
                labels: labels,
                datasets: [{
                    label: 'pengeluaran',
                    data: amounts,
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.4
                }]
            });

        } catch (error) {
            console.error('Error fetching pengeluaran data:', error);
        }
    };

    useEffect(() => {
        fetchPengeluaran();
    }, []);

    // Function to format amount
    const formatAmount = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 2
        }).format(amount);
    };

    // Function to format date
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

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
            format: row => formatAmount(row.amount)
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
            format: row => formatDate(row.date)
        },
    ];

    return (
        <>
            <div className='rounded-3 mb-3'>
                <div className='nominal-info mx-auto'>
                    <h3 className='fw-bold text-white text-center'>{formatAmount(totalAmount)}</h3>
                </div>
            </div>
            <h4 className='text-center'>Pengeluaran Terkini</h4>
            <div className="col-md-6 left-side">
                <div className='row align-items-center p-4 rounded'>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='text-center'>
                                <th>Nominal & Deskripsi</th>
                                <th>Tanggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length > 0 && data.slice(0, 5).map((pengeluaran, index) => {
                                return (
                                    <tr key={index} className='text-center'>
                                        <td>
                                            <h5>{formatAmount(pengeluaran.amount)}</h5>
                                            <p>{pengeluaran.description}</p>
                                        </td>
                                        <td>{formatDate(pengeluaran.date)}</td>
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
                        data={chartData} 
                        options={{
                            responsive: true,
                            maintainAspectRatio: false, // Allow the chart to resize without maintaining the aspect ratio
                        }} 
                    />
                </div>
                <div>
                    <Button className="btn-buatcatatan w-auto" onClick={() => setShow(true)}>
                        Buat catatan baru
                    </Button>
                </div>
            </div>
            <CatatanPengeluaranModal show={show} setShow={setShow} fetchPengeluaran={fetchPengeluaran} />
        </>
    );
}

export default CatatanPengeluaran;
