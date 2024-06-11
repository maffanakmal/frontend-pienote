import React, {useState} from 'react'
import '../../assets/Css/ForgetPassword.css'
import { Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const FormBuatPassBaru = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <> 
                <h3 className='mb-3'>Buat Password Baru</h3>
                <p className='mb-5'>Masukkan password baru yang kuat dan aman. Pastikan password Anda mudah diingat namun sulit ditebak orang lain.</p>
                <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="form-control fw-light rounded-2"
                                id="password"
                                placeholder='Enter your password'
                                required
                            />
                            <button
                                type="button"
                                className="eye-btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm_pass" className="form-label">Confirm Password</label>
                        <div className="input-group">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirm_pass"
                                className="form-control fw-light rounded-2"
                                id="confirm_pass"
                                placeholder='Re-enter your password'
                                required
                            />
                            <button
                                type="button"
                                className="eye-btn"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>
                <div className='btn-forgetpass d-flex'>
                <Button className='mx-auto btn-secondary' onClick={() => navigate('/forgetpassword/check-email')}>
                Kembali
                </Button>
                <Button className='mx-auto btn-primary' onClick={() => navigate('/login')}>
                    Konfirmasi
                </Button>
                </div>
        </>
    )
}

export default FormBuatPassBaru