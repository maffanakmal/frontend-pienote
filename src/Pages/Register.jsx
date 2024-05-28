import React from 'react'
import RegisterForm from '../Fragments/Login-page/RegisterForm'
import LoginImg from '../assets/Image/img-login.svg'

const Register = () => {
    return (
        <div className='login-container min-vh-100 d-flex justify-content-center align-items-center'>
            <div className="row rounded-4 p-3 area-box border m-4">
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column right-side">
                    <div className="side-img text-center">
                        <img src={LoginImg} alt="" width='100%' />
                    </div>
                </div>
                <div className="col-md-6 left-side">
                    <div className='row align-items-center p-4'>
                        <div className="header-text mb-4">
                            <h3>Create New Account</h3>
                        </div>
                        <RegisterForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register