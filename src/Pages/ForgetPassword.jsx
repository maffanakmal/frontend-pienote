import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../assets/Css/ForgetPassword.css'
import FormEmailForgetPass from '../Fragments/Forget-password/FormEmailForgetPass';
import PeriksaEmailForgetPass from '../Fragments/Forget-password/PeriksaEmailForgetPass';
import FormBuatPassBaru from '../Fragments/Forget-password/FormBuatPassBaru';

const ForgetPassword = () => {
    return (
        <>
            <Container className="forgetpass-container">
                <div className="forgetpass-content">
                    <div className="forgetpass-header">
                        <span className="close">&times;</span>
                    </div>
                    <div className="forgetpass-body">
                    <div className="side-img text-center">
                        <i class="fa-solid fa-circle-exclamation"></i>
                    </div>
                        <h2>Lupa Password</h2>
                        <div className="steps">
                            <div className="step active">
                                <span>✓</span>
                                Masukan Email
                            </div>
                            <div className="step">
                                <span>2</span>
                                Konfirmasi Email
                            </div>
                            <div className="step">
                                <span>3</span>
                                Ganti Password
                            </div>
                        </div>
                        {/* <FormEmailForgetPass/> */}
                        {/* <PeriksaEmailForgetPass/> */}
                        <FormBuatPassBaru/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ForgetPassword