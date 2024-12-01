import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState<any>(null);  // Using 'any' for flexibility, could be typed later

  // Fetch user profile data when the component is mounted
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));  // Set user data from localStorage
    } else {
      // Fetch from the API if user data is not found in localStorage
      axios.get('http://localhost:8000/api/profile/', { withCredentials: true })
        .then(response => {
          setUserData(response.data);
          localStorage.setItem('userData', JSON.stringify(response.data));  // Store in localStorage
        })
        .catch(error => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, []);


  return (
    <div className="container mt-5">
      {userData ? (
        <div className="card p-4 shadow">
          <h2 className="mb-4 text-center">User Profile</h2>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>First Name:</strong> {userData.first_name}</p>
          <p><strong>Last Name:</strong> {userData.last_name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
