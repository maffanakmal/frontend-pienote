import React from 'react'
import '../../assets/Css/ForgetPassword.css'
import { NavLink } from 'react-router-dom';

const FormEmailForgetPass = () => {
    return (
        <>
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
        </>
    )
}

export default FormEmailForgetPass