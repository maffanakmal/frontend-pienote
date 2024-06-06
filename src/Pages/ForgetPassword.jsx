import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../assets/Css/ForgetPassword.css'
import alertIcon from '../assets/Image/alert-icon.png'
import { NavLink, useLocation } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <>
            <div className="forgetpass-container">
                <div className="forgetpass-content">
                    <div className="forgetpass-header">
                        <span className="close">&times;</span>
                    </div>
                    <div className="forgetpass-body">
                    <div className="side-img text-center">
                        <img src={alertIcon} alt="" width='15%'/>
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
                        <div className="form-group">
                            <label htmlFor="email">Masukkan Alamat Email Anda</label>
                            <p>Masukkan alamat email yang terkait dengan akun Anda di bawah ini. Kami akan mengirimkan tautan untuk mengatur ulang password Anda.</p><br />
                            <label htmlFor="email">Masukkan Alamat Email</label>
                            <input type="email" id="email" placeholder="Masukkan Email" />
                        </div>
                        <div className="buttons">
                        <NavLink className='button secondary' to='/login'> Kembali </NavLink>
                            <NavLink className='button primary' to='/forgetPassword2'> Konfirmasi </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword