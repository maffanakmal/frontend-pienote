import React from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import '../assets/Css/ForgetPassword.css';
import FormEmailForgetPass from '../Fragments/Forget-password/FormEmailForgetPass';
import PeriksaEmailForgetPass from '../Fragments/Forget-password/PeriksaEmailForgetPass';
import FormBuatPassBaru from '../Fragments/Forget-password/FormBuatPassBaru';

const ForgetPassword = () => {
    const { section } = useParams();
    const navigate = useNavigate();

    const renderStepForm = () => {
        switch (section) {
            case 'form-email':
                return <FormEmailForgetPass />;
            case 'check-email':
                return <PeriksaEmailForgetPass />;
            case 'create-password':
                return <FormBuatPassBaru />;
            default:
                return <FormEmailForgetPass />;
        }
    };

    return (
        <div className="forgetpass-container w-100 min-vh-100 d-flex align-items-center justify-content-center">
            <Row className="forgetpass-content rounded-3 bg-white p-4">
                <div className="forgetpass-header d-flex justify-content-end">
                    <NavLink onClick={() => navigate('/login')}><i className="fa-solid fa-x"></i></NavLink>
                </div>
                <div className="forgetpass-body">
                    <div className="top-img text-center mb-4">
                        <i className="fa-solid fa-circle-exclamation"></i>
                    </div>
                    <h2 className='text-center mb-3'>Lupa Password</h2>
                    <div className="steps d-flex align-items-center justify-content-center mb-4">
                        <Col md='3' className='step mx-4 w-auto'>
                            <span>{section === 'form-email' ? '✓' : '1'}</span>
                            Masukan Email
                        </Col>
                        <Col md='3' className='step mx-4 w-auto'>
                            <span>{section === 'check-email' ? '✓' : '2'}</span>
                            Konfirmasi Email
                        </Col>
                        <Col md='3' className='step mx-4 w-auto'>
                            <span>{section === 'create-password' ? '✓' : '3'}</span>
                            Ganti Password
                        </Col>
                    </div>
                    <div className='d-flex flex-column'>
                        {renderStepForm()}
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default ForgetPassword;
