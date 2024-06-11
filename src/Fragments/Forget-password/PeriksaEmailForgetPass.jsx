import React from 'react'
// import '../../assets/Css/ForgetPassword.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PeriksaEmailForgetPass = () => {
    
    const navigate = useNavigate()

    return (
        <>
            <h3 className='mb-3'>Periksa Email Anda</h3>
            <p className='mb-5'>Buka email dari kami yang berisi tautan untuk mengatur ulang password. Jika tidak melihatnya di kotak masuk, periksa folder spam atau promosi.</p>
            <div className='btn-forgetpass d-flex'>
            <Button className='mx-auto btn-secondary' onClick={() => navigate('/forgetpassword/form-email')}>
                Kembali
            </Button>
            <Button className='mx-auto btn-primary' onClick={() => navigate('/forgetpassword/create-password')}>
                Periksa Email
            </Button>
            </div>
        </>
    )
}

export default PeriksaEmailForgetPass