import React from 'react'
import '../../assets/Css/ForgetPassword.css'
import { NavLink } from 'react-router-dom';

const PeriksaEmailForgetPass = () => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="email">Periksa Email Anda</label>
                <p>Buka email dari kami yang berisi tautan untuk mengatur ulang password. Jika tidak melihatnya di kotak masuk, periksa folder spam atau promosi.</p><br />
            </div>
            <div className="buttons">
                <NavLink className='button secondary' to='/forgetPassword'> Kembali </NavLink>
                <NavLink className='button primary' to='/forgetPassword3'> Periksa Email </NavLink>
            </div>
        </>
    )
}

export default PeriksaEmailForgetPass