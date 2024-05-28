import React from 'react'
import LoginImg from '../assets/Image/img-login.svg'
import LoginForm from '../Fragments/Login-page/LoginForm'

const Login = () => {
    return (
        <div className='login-container min-vh-100 d-flex justify-content-center align-items-center'>
            <div className="row rounded-4 p-3 area-box border m-4">
                <div className="col-md-6 left-side">
                    <div className='row align-items-center p-4'>
                        <div className="header-text mb-4">
                            <h3>Hi, Welcome Back🖐</h3>
                            <h5>Let's Login!</h5>
                        </div>
                        <LoginForm/>
                    </div>
                </div>
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column right-side">
                    <div className="side-img text-center">
                        <img src={LoginImg} alt="" width='100%'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login