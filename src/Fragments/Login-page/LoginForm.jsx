import '../../assets/Css/Login-Register.css';
import React, { useState } from 'react';
import googleImg from "../../assets/Image/google-logo.png";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
    const [values, setValues] = useState({
        authIdentifier: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/login', values, { withCredentials: true })
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error);
                    setShow(true);
                    setTimeout(() => {
                        setShow(false);
                    }, 5000);
                } else {
                    setSuccess('Login Successful!');
                    setShow(true);
                    setTimeout(() => {
                        setShow(false);
                    }, 4000);
                    setTimeout(() => {
                        navigate('/home');
                    }, 5000);
                }
            })
            .catch(err => {
                const errorMessage = err.response && err.response.data && err.response.data.error
                    ? err.response.data.error
                    : 'An unexpected error occurred';
                setError(errorMessage);
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 5000);
            });
    };

    return (
        <>
<<<<<<< HEAD
            <form action="">
                <div className="mb-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control fw-light" id="username" placeholder='Enter your username' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control fw-light" id="password" placeholder='Enter your password' />
                </div>
                <div className="d-flex justify-content-between">
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
=======
            <div className="loginRegister-wrapper">
                <form onSubmit={handleSubmit}>
                    {show && error && (
                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                            <p>{error}</p>
                        </Alert>
                    )}
                    {show && success && (
                        <Alert variant="success" onClose={() => setShow(false)} dismissible>
                            <p>{success}</p>
                        </Alert>
                    )}
                    <div className="mb-3">
                        <label htmlFor="authIdentifier" className="form-label">Username or Email</label>
                        <input
                            type="text"
                            name="authIdentifier"
                            onChange={e => setValues({ ...values, authIdentifier: e.target.value })}
                            className="form-control fw-light"
                            id="authIdentifier"
                            placeholder='Enter your userename or email'
                            required
                        />
>>>>>>> 7bd083fdd80aba0e5e5783c2e9af818a9722af7d
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                onChange={e => setValues({ ...values, password: e.target.value })}
                                className="form-control fw-light"
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
                    <div className="d-flex justify-content-between">
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <NavLink to="">Forgot Password</NavLink>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn-login w-100 fs-6">Login</button>
                    </div>
                    <p className='text-center mb-3'>or login with</p>
                    <div className="mb-3">
                        <button type="button" className="btn-register w-100 fs-6"><img src={googleImg} alt="Google Logo" />Login with Google</button>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <p>Don't have an account? </p>
                        <NavLink to="/register">Sign Up</NavLink>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
