import React from 'react'
import '../assets/Css/ForgetPassword2.css'
import alertIcon from '../assets/Image/alert-icon.png'
import { NavLink, useLocation } from 'react-router-dom';

const ForgetPassword2 = () => {
    return (
        <>
            <div className="forpas">
                <div className="forpas-content">
                    <div className="forpas-header">
                        <span className="close">&times;</span>
                    </div>
                    <div className="forpas-body">
                    <div className="side-img text-center">
                        <img src={alertIcon} alt="" width='15%'/>
                    </div>
                        <h2>Lupa Password</h2>
                        <div className="steps">
                            <div className="step active">
                                <span>✓</span>
                                Masukan Email
                            </div>
                            <div className="step active">
                                <span>✓</span>
                                Konfirmasi Email
                            </div>
                            <div className="step">
                                <span>3</span>
                                Ganti Password
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Periksa Email Anda</label>
                            <p>Buka email dari kami yang berisi tautan untuk mengatur ulang password. Jika tidak melihatnya di kotak masuk, periksa folder spam atau promosi.</p><br />
                        </div>
                        <div className="buttons">
                        <NavLink className='button secondary' to='/forgetPassword'> Kembali </NavLink>
                        <NavLink className='button primary' to='/forgetPassword3'> Periksa Email </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword2