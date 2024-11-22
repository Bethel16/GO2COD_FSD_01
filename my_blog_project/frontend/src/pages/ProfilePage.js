import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        setUserData(JSON.parse(storedUserData)); // Set user data from localStorage
    } else {
        axios.get('http://localhost:8000/api/profile/', { withCredentials: true })
            .then(response => {
                setUserData(response.data);
                localStorage.setItem('userData', JSON.stringify(response.data)); // Store in localStorage
            })
            .catch(error => {
                console.error("Error fetching profile data:", error);
            });
    }
}, []);
  const handleLogout = async () => {
    try {
        const csrfToken = localStorage.getItem('csrfToken'); // Get CSRF token if needed
        const response = await axios.post('http://localhost:8000/api/logout/', {}, {
            withCredentials: true,
            headers: { 'X-CSRFToken': csrfToken }, // Send CSRF token if required
        });
        console.log("Logged out successfully", response.data);
        localStorage.removeItem('userData'); // Remove user data from localStorage
        navigate('/login'); // Redirect to login page
    } catch (error) {
        console.error("Error logging out:", error);
    }
};

  return (
    <div className="container mt-5">
      {userData ? (
        <div className="card p-4 shadow">
          <h2 className="mb-4 text-center">User Profile</h2>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>First Name:</strong> {userData.first_name}</p>
          <p><strong>Last Name:</strong> {userData.last_name}</p>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
