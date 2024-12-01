import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// CSRF Token Retrieval Function
const getCSRFToken = () => {
    const csrfCookie = document.cookie
        .split("; ")
        .find(row => row.startsWith("csrftoken="));
    return csrfCookie ? csrfCookie.split("=")[1] : null;
};

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = { username, password, first_name: firstName, last_name: lastName, email };

        try {
            const response = await axios.post("http://localhost:8000/api/register/", formData, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCSRFToken(),
                },
                withCredentials: true,
            });
            console.log("User registered successfully:", response.data);
            setSuccessMessage("Registration successful! Please login.");
            setErrorMessage("");
        } catch (error) {
            console.error("Error during registration:", error);
            setErrorMessage("Failed to register. Please try again.");
            setSuccessMessage("");
        }
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center vh-100"
            style={{
                backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("http://localhost:8000/static/assets/img/header_2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
            }}
        >
            <div
                className="card p-5 shadow-lg border-0"
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 className="text-center mb-4" style={{ color: '#ffffff', fontWeight: '700' }}>
                    Create Account
                </h3>
                {errorMessage && (
                    <div className="alert alert-danger rounded-pill text-center" style={{ fontSize: '14px' }}>
                        {errorMessage}
                    </div>
                )}
                {successMessage && (
                    <div className="alert alert-success rounded-pill text-center" style={{ fontSize: '14px' }}>
                        {successMessage}
                    </div>
                )}
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="form-control rounded-pill"
                            placeholder="First Name"
                            style={{
                                padding: '10px 15px',
                                borderColor: '#4a90e2',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="form-control rounded-pill"
                            placeholder="Last Name"
                            style={{
                                padding: '10px 15px',
                                borderColor: '#4a90e2',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="form-control rounded-pill"
                            placeholder="Username"
                            style={{
                                padding: '10px 15px',
                                borderColor: '#4a90e2',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-control rounded-pill"
                            placeholder="Email"
                            style={{
                                padding: '10px 15px',
                                borderColor: '#4a90e2',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control rounded-pill"
                            placeholder="Password"
                            style={{
                                padding: '10px 15px',
                                borderColor: '#4a90e2',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control rounded-pill"
                            placeholder="Re-type password"
                            style={{
                                padding: '10px 15px',
                                borderColor: '#4a90e2',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 rounded-pill"
                        style={{
                            backgroundColor: '#4a90e2',
                            borderColor: '#4a90e2',
                            fontWeight: '600',
                            boxShadow: '0px 4px 10px rgba(74, 144, 226, 0.4)',
                        }}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
