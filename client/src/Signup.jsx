import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhosT:4000/register', { name, email, password })
            .then(result => console.log(result))
            .catch(err=>console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-item-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25 '>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            name='email'
                            autoComplete='off'
                            className='form-control rounded-0'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            name='password'
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.value.target)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                </form>
                <p>Already Have an Account</p>
                <button
                    className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
                    onClick={() => {
                        navigate('/login');
                    }}
                >Login</button>

            </div>
        </div>
    )
}

export default Signup