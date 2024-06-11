import React from 'react'
import { Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import PeriksaEmailForgetPass from '../Forget-password/PeriksaEmailForgetPass'

const FormEmailForgetPass = () => {
    const navigate = useNavigate()

    return (
        <>
            <h3 className='mb-3'>Masukkan Alamat Email Anda</h3>
            <p className='mb-3'>Masukkan alamat email yang terkait dengan akun Anda di bawah ini. Kami akan mengirimkan tautan untuk mengatur ulang password Anda.</p>
            <div className="mb-3 mb-4">
                        <label htmlFor="enterEmail" className="form-label">Masukkan Alamat Email Anda</label>
                        <input
                            type="text"
                            name="enterEmail"
                            className="form-control fw-light rounded-2"
                            id="enterEmail"
                            placeholder='Masukkan email'
                            required
                        />
                    </div>
            <div className='btn-forgetpass d-flex'>
            <Button className='mx-auto btn-secondary' onClick={() => navigate('/login')}>
                Kembali
            </Button>
            <Button className='mx-auto btn-primary' type='submit' onClick={() => navigate('/forgetpassword/check-email')}>
                Konfirmasi
            </Button>
            </div>
        </>
    )
}

export default FormEmailForgetPass