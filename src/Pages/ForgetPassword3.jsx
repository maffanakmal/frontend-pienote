import React from 'react'
import '../assets/Css/ForgetPassword3.css'
import alertIcon from '../assets/Image/alert-icon.png'
import { NavLink, useLocation } from 'react-router-dom';

const ForgetPassword3 = () => {
  return (
    <>
    <div class="forpass">
        <div class="forpass-content">
            <div class="forpass-header">
                <span class="close">&times;</span>
            </div>
            <div class="forpass-body">
            <div className="side-img text-center">
                        <img src={alertIcon} alt="" width='15%'/>
                    </div>
                <h2>Lupa Password</h2>
                <div class="steps">
                    <div class="step active">
                        <span>✓</span>
                        Masukan Email
                    </div>
                    <div class="step active">
                        <span>✓</span>
                        Konfirmasi Email
                    </div>
                    <div class="step active">
                        <span>✓</span>
                        Ganti Password
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Buat Password Baru</label>
                    <p>Masukkan password baru yang kuat dan aman. Pastikan password Anda mudah diingat namun sulit ditebak orang lain.</p>
                </div>
                <div class="input-box">
                    <p>Masukkan kata sandi baru</p>
                    <input id="create_pw" type="password" required/>
                    <i class="fas fa-eye-slash show"></i>
                  </div>
                  <div class="input-box">
                    <p>Konfirmasi kata sandi baru</p>
                    <input id="confirm_pw" type="password" required/>
                    <i class="fas fa-eye-slash show"></i>
                  </div><br/>
                <div class="buttonss">
                <NavLink className='button secondary' to='/forgetPassword'> Kembali </NavLink>
                <NavLink className='button primary' to='/forgetPassword3'> Konfirmasi </NavLink>
                </div>
            </div>
        </div>
    </div>

    {/* <script>
        function togglePassword(fieldId, button) {
            var passwordField = document.getElementById(fieldId);
            if (passwordField.type === "password") {
                passwordField.type = "text";
                button.textContent = "Hide";
            } else {
                passwordField.type = "password";
                button.textContent = "Show";
            }
        }
    </script> */}
    </>
  )
}

export default ForgetPassword3