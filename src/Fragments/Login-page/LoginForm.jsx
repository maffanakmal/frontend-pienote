import '../../assets/Css/Login-Register.css'
import React from 'react'
import googleImg from "../../assets/Image/google-logo.png"
import { NavLink } from 'react-router-dom'

const LoginForm = () => {
    return (
        <>
            <form action="">
                <div className="mb-2">
                    <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control fw-light" id="username" placeholder='Enter your username' />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control fw-light" id="password" placeholder='Enter your password' />
                </div>
                <div className="d-flex justify-content-between">
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label" for="rememberMe">Remember Me</label>
                    </div>
                    <NavLink to="/profileSetting">Forgot Password</NavLink>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn-login w-100 fs-6">Login</button>
                </div>
                <p className='text-center'>or login with</p>
                <div className="mb-3">
                    <button type="submit" className="btn-register w-100 fs-6"><img src={googleImg} alt=""/>Login with google</button>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <p>Don't have an account? </p>
                    <NavLink to="/register">Sign Up</NavLink>
                </div>
            </form>
        </>
    )
}

export default LoginForm