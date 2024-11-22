import React from 'react';
import NavBar from '../components/NavBar';
import Main  from '../components/Main';
import BlogPage from './BlogPage';
const HomePage = () => {
  return (
    <>
      <NavBar />
      <Main />
      <BlogPage/>
    </>
  );
};

export default HomePage;
