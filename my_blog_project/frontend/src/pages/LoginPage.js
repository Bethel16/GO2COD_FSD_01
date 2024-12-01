import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', formData, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
            console.log("User logged in successfully", response.data);

            // Store CSRF token and user data in localStorage
            const csrfToken = response.headers['x-csrftoken'];
            localStorage.setItem('csrfToken', csrfToken);
            localStorage.setItem('userData', JSON.stringify(response.data));

            setIsLoggedIn(true); // Set login status in parent component
            navigate('/blog'); // Redirect to profile page
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center vh-100"
            style={{
                backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("http://localhost:8000/static/assets/img/header_2.jpg")',
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
                    Welcome Back
                </h3>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
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
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
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
                        Login
                    </button>
                </form>
                <div className="text-center mt-3">
                    <a href="/forgot-password" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: '500' }}>
                        Forgot Password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
