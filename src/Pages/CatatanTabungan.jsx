import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import ProfileNavbarComp from '../components/ProfileNavbarComp';
import "../assets/Css/Tabungan.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CatatanTabungan = () => {
    const [personalSavings, setPersonalSavings] = useState([]);
    const [groupSavings, setGroupSavings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch personal savings from the backend
        axios.get('http://localhost:5081/catatantabungan/pribadi', { withCredentials: true })
            .then(response => {
                if (response.data.savings) {
                    setPersonalSavings(response.data.savings);
                }
            })
            .catch(error => {
                console.error("Error fetching personal savings:", error);
            });

        // Fetch group savings from the backend
        axios.get('http://localhost:5081/catatantabungan/bersama', { withCredentials: true })
            .then(response => {
                if (response.data.savings) {
                    setGroupSavings(response.data.savings);
                }
            })
            .catch(error => {
                console.error("Error fetching group savings:", error);
            });
    }, []);

    const formatAmount = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 2
        }).format(amount);
    };

    return (
        <>
            <ProfileNavbarComp />
            <Container className='tabungan-container min-vh-100 d-flex align-items-center justify-content-center'>
                <div className='w-100'>
                    <h3 className='mb-2'>Tabungan</h3>
                    <h5 className='mb-4'>Rencanakan hari esokmu dengan setiap langkah hemat bersama fitur tabungan kami</h5>
                    <Row className='tabungan-row'>
                        <p className='mb-2'>Tabungan Saya</p>
                        {personalSavings.map((personalsaving, personal) => (
                            <Col key={personal} md='3' className='tabungansendiri-card p-4 rounded-2 mx-1 mb-2' onClick={() => navigate(`/detailtabunganpribadi/${personalsaving.personalsaving_id}`)}>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='mb-1 text-white'>{personalsaving.saving_name}</h5>
                                        {personalsaving.wishlist ? (
                                            <p><i className="wishlist-icon fa-solid fa-star"></i></p>
                                        ) : (
                                            <p></p>
                                        )}
                                    </div>
                                    <p className='mb-3 text-white'>{formatAmount(personalsaving.target)}</p>
                                    <ProgressBar 
                                        now={(personalsaving.current_amount / personalsaving.target) * 100} 
                                        className='mb-2' 
                                        label={`${Math.round((personalsaving.current_amount / personalsaving.target) * 100)}%`}
                                    />
                                    <p className='mt-3 text-white'>{new Date(personalsaving.dateline).toLocaleDateString()}</p>
                                </div>
                            </Col>
                        ))}
                        <Col md='3' className='tabungansendiri-card d-flex justify-content-center align-items-center p-4 rounded-2 mx-1 mb-2' onClick={() => navigate('/tabunganpribadi')}>
                            <div>
                                <h5 className='mb-3 text-white'>Tambah Tabungan</h5>
                                <p className='text-center text-white'><i className="fa-solid fa-plus"></i></p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <p className='mb-2'>Tabungan Bersama</p>
                        {groupSavings.map((groupsaving, groupindex) => (
                            <Col key={groupindex} md='3' className='tabunganbersama-card p-4 rounded-2 mx-1 mb-2' onClick={() => navigate(`/detailtabunganbersama/${groupsaving.groupsavings_id}`)}>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='mb-1 text-white'>{groupsaving.saving_name}</h5>
                                        <p><i className="wishlist-icon fa-solid fa-star"></i></p>
                                    </div>
                                    <p className='mb-3 text-white'>{formatAmount(groupsaving.target)}</p>
                                    <ProgressBar className='mb-2' now={(groupsaving.current_amount / groupsaving.target) * 100} label={`${Math.round((groupsaving.current_amount / groupsaving.target) * 100)}%`} />
                                    <div className='mt-2 text-white'>
                                        {Array.isArray(groupsaving.friends) ? (
                                            groupsaving.friends.map((friend, idx) => (
                                                <i key={idx} className="fa-solid fa-user"></i>
                                            ))
                                        ) : (
                                            <p>No friends available</p>
                                        )}
                                    </div>
                                    <p className='mt-2 text-white'>{new Date(groupsaving.dateline).toLocaleDateString()}</p>
                                </div>
                            </Col>
                        ))}
                        <Col md='3' className='tabunganbersama-card d-flex justify-content-center align-items-center p-4 rounded-2 mx-1 mb-2' onClick={() => navigate('/tabunganbersama')}>
                            <div>
                                <h5 className='mb-3 text-white'>Tambah Tabungan</h5>
                                <p className='text-center text-white'><i className="fa-solid fa-plus"></i></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default CatatanTabungan;
