import React from 'react';
import { Container, Row, Col, ProgressBar, Card, Button } from 'react-bootstrap';
import ProfileNavbarComp from '../components/ProfileNavbarComp';
import "../assets/Css/Tabungan.css";
import { useNavigate } from 'react-router-dom';

const CatatanTabungan = () => {

    const navigate = useNavigate()

    return (
        <>
            <ProfileNavbarComp />
            <Container className='tabungan-container min-vh-100 d-flex align-items-center justify-content-center'>
                <div className='w-100'>
                    <h3 className='mb-2'>Tabungan</h3>
                    <h5 className='mb-4'>Rencanakan hari esokmu dengan setiap langkah hemat bersama fitur tabungan kami</h5>
                    <Row>
                        <p className='mb-2'>Tabungan Saya</p>
                        <Col md='3' className='tabungansendiri-card p-4 rounded-2 mx-1 mb-2' onClick={() => navigate('/detailtabungan')}>
                            <div>
                                <h5 className='mb-1 text-white'>Rumah</h5>
                                <p className='mb-3 text-white'>Nominal</p>
                                <ProgressBar className='mb-2'></ProgressBar>
                                <p className='text-white'>tanggal</p>
                            </div>
                        </Col>
                        <Col md='3' className='tabungansendiri-card d-flex justify-content-center align-items-center p-4 rounded-2 mx-1 mb-2' onClick={() => navigate('/tabunganpribadi')}>
                            <div>
                                <h5 className='mb-3 text-white'>Tambah Tabungan</h5>
                                <p className='text-center text-white'><i className="fa-solid fa-plus"></i></p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <p className='mb-2'>Tabungan Bersama</p>
                        <Col md='3' className='tabunganbersama-card p-4 rounded-2 mx-1 mb-2' onClick={() => navigate('/detailtabungan')}>
                            <div>
                                <h5 className='mb-1 text-white'>Rumah</h5>
                                <p className='mb-3 text-white'>Nominal</p>
                                <ProgressBar className='mb-2'></ProgressBar>
                                <div className='mt-2 text-white'>
                                    <i class="fa-solid fa-user"></i>
                                    <i class="fa-solid fa-user"></i>
                                    <i class="fa-solid fa-user"></i>
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <p className='text-white'>tanggal</p>
                            </div>
                        </Col>
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
