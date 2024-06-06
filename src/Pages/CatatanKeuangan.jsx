import '../assets/Css/CatatanKeuangan.css'
import { useParams, Link, NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import { Row, Nav, Button } from 'react-bootstrap'
import CatatanPemasukan from '../Fragments/Catatan-keuangan/CatatanPemasukan'
import CatatanPengeluaran from '../Fragments/Catatan-keuangan/CatatanPengeluaran'
import LaporanKeuangan from '../Fragments/Catatan-keuangan/LaporanKeuangan'
import { catatanLinks } from '../assets/Js/catatan-keuangan'
import ProfileNav from '../Components/ProfileNav'

const CatatanKeuangan = () => {
    const { section } = useParams(); // Get the URL parameter

    const renderContent = () => {
        switch (section) {
            case 'pemasukan':
                return <CatatanPemasukan />;
            case 'pengeluaran':
                return <CatatanPengeluaran />;
            case 'laporan':
                return <LaporanKeuangan />;
            default:
                return <CatatanPemasukan />; // Default content if no match
        }
    };

    return (
        <>
            <ProfileNav />
            <div className='catatanKeuangan-container min-vh-100 d-flex flex-column justify-content-center align-items-center' id='pemasukan'>
                <h2 className='mb-3'>Catatan Keuangan</h2>
                <Row>
                    <Nav className="catatanKeuangan-nav mb-3 d-flex justify-content-center align-items-center w-100">
                        {catatanLinks.map((link) => (
                            <div className='catatan-link' key={link.id}>
                                <NavLink
                                    to={`/catatankeuangan/${link.path}`}
                                    activeClassName="active" // Correct prop name
                                >
                                    {link.text}
                                </NavLink>
                            </div>
                        ))}
                    </Nav>
                </Row>
                <Row className="rounded-4 p-3 info-catatanKeuangan border m-4 d-flex ">
                    {renderContent()}
                </Row>
            </div>
        </>
    )
}

export default CatatanKeuangan;
