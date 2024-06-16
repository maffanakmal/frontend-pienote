import '../../assets/Css/Login-Register.css';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegisterForm = () => {
    const [values, setValues] = useState({
        full_name: '',
        username: '',
        email: '',
        phone_number: '',
        password: '',
        confirm_pass: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/register', values, { withCredentials: true })
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error);
                    setShow(true);
                    setTimeout(() => {
                        setShow(false);
                    }, 5000);
                } else {
                    setSuccess('Your account has been created!');
                    setShow(true);
                    setTimeout(() => {
                        setShow(false);
                    }, 4000);
                    setTimeout(() => {
                        navigate('/login');
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
                    <div className='mb-3'>
                        <label htmlFor="full_name" className="form-label">Name</label>
                        <input
                            type="text"
                            name="full_name"
                            onChange={e => setValues({ ...values, full_name: e.target.value })}
                            className="form-control fw-light rounded-2"
                            id="full_name"
                            placeholder='Enter your full name'
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            name="username"
                            onChange={e => setValues({ ...values, username: e.target.value })}
                            className="form-control fw-light rounded-2"
                            id="username"
                            placeholder='Enter your username'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={e => setValues({ ...values, email: e.target.value })}
                            className="form-control fw-light rounded-2"
                            id="email"
                            placeholder='Enter your email'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                            type="text"
                            name="phone_number"
                            onChange={e => setValues({ ...values, phone_number: e.target.value })}
                            className="form-control fw-light rounded-2"
                            id="phone"
                            placeholder='Enter your phone number'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                        <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                onChange={e => setValues({ ...values, password: e.target.value })}
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
                                {showPassword ? (
                                    <i className="fa-solid fa-eye"></i>
                                    ) : (
                                    <i className="fa-solid fa-eye-slash"></i>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm_pass" className="form-label">Confirm Password</label>
                        <div className="input-group">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirm_pass"
                                onChange={e => setValues({ ...values, confirm_pass: e.target.value })}
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
                    <div className="mb-3">
                        <button type="submit" className="btn-login w-100 fs-6">Create Account</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p>Already have an account?</p>
                        <NavLink to="/login">Sign In</NavLink>
                    </div>
                </form>
            </div>
        </>
    );
}

export default RegisterForm;
