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
            navigate('/profile'); // Redirect to profile page
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
                backgroundImage: 'url("http://localhost:8000/static/assets/img/header_2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="card p-4 shadow-lg"
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    marginTop: '100px'
                }}
            >
                <h2 className="text-center mb-4">Login</h2>
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
                            style={{ padding: '10px 15px', borderColor: '#4a90e2' }}
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
                            style={{ padding: '10px 15px', borderColor: '#4a90e2' }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 rounded-pill"
                        style={{ backgroundColor: '#4a90e2', borderColor: '#4a90e2', fontWeight: '600' }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
