import '../../assets/Css/Login-Register.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/register', values)
            .then(res => {
                console.log(res);
                // Handle success (e.g., redirect to login page)
            })
            .catch(err => {
                console.log(err);
                // Handle error (e.g., show error message)
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="fullName" className="form-label">Name</label>
                    <input 
                        type="text" 
                        name="fullName" 
                        onChange={e => setValues({ ...values, fullName: e.target.value })} 
                        className="form-control fw-light" 
                        id="fullName" 
                        placeholder='Enter your full name' 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        onChange={e => setValues({ ...values, email: e.target.value })} 
                        className="form-control fw-light" 
                        id="email" 
                        placeholder='Enter your email' 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        onChange={e => setValues({ ...values, phoneNumber: e.target.value })} 
                        className="form-control fw-light" 
                        id="phone" 
                        placeholder='Enter your phone number' 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={e => setValues({ ...values, password: e.target.value })} 
                        className="form-control fw-light" 
                        id="password" 
                        placeholder='Enter your password' 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn-login w-100 fs-6">Create Account</button>
                </div>
                <div className="d-flex justify-content-center">
                    <p>Already have an account?</p>
                    <NavLink to="/login">Sign In</NavLink>
                </div>
            </form>
        </>
    );
}

export default RegisterForm;
