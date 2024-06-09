import React from 'react'
import '../../assets/Css/ForgetPassword.css'
import { NavLink } from 'react-router-dom';

const FormBuatPassBaru = () => {
    return (
        <>
            <div class="form-group">
                <label for="email">Buat Password Baru</label>
                <p>Masukkan password baru yang kuat dan aman. Pastikan password Anda mudah diingat namun sulit ditebak orang lain.</p>
            </div>
            <div class="input-box">
                <p>Masukkan kata sandi baru</p>
                <input id="create_pw" type="password" required />
                <i class="fas fa-eye-slash show"></i>
            </div>
            <div class="input-box">
                <p>Konfirmasi kata sandi baru</p>
                <input id="confirm_pw" type="password" required />
                <i class="fas fa-eye-slash show"></i>
            </div><br />
            <div class="buttonss">
                <NavLink className='button secondary' to='/forgetPassword'> Kembali </NavLink>
                <NavLink className='button primary' to='/forgetPassword3'> Konfirmasi </NavLink>
            </div>
        </>
    )
}

export default FormBuatPassBaru