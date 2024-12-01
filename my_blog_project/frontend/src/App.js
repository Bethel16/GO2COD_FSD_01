import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import AboutUs from './pages/AboutPage';
import BlogList from './pages/BlogList';
import BlogDetail from "./components/BlogDetails";
import ProfilePage from './pages/ProfilePage';
import MyBlog from './components/MyBlog';
import EditPost from './components/EditPost';

// Set CSRF token config globally for Axios
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in by checking localStorage
  const isUserLoggedIn = () => {
    const userData = localStorage.getItem('userData');
    return userData !== null; // Returns true if session exists
  };

  useEffect(() => {
    // Set login status based on localStorage data
    setIsLoggedIn(isUserLoggedIn());
  }, []);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-posts" element={<MyBlog />} />
        <Route path="/edit-post/:postId" element={<EditPost />} />
        <Route 
  path="/profile" 
  element={<ProfilePage setIsLoggedIn={setIsLoggedIn} />} 
/>

      </Routes>
    </Router>
  );
}

export default App;
