// src/pages/AboutUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/theme.min.css';
import '../assets/css/user.min.css';

const AboutUs = () => (
  <main>
    {/* Hero Section */}
    <section className="text-center text-white py-5" style={{ backgroundImage: 'url(http://localhost:8000/static/assets/img/header_2.jpg)', backgroundSize: 'cover' }}>
      <div className="overlay overlay-freya" />
      <div className="container py-5">
      <h1 className="display-4 fw-bold" style={{ color: 'white' }}>
  About Freya Inc.
</h1>
        <p className="lead">Building spaces that inspire and endure.</p>
      </div>
    </section>

    {/* Mission and Vision Section */}
    <section className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold">Our Mission</h2>
            <p className="text-muted">To create sustainable and luxurious spaces where people can thrive. Freya Inc. is dedicated to redefining real estate with a focus on elegance, comfort, and innovation.</p>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Our Vision</h2>
            <p className="text-muted">To become the leading real estate development company, recognized for quality, integrity, and customer satisfaction worldwide.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Our Story Section */}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-md-8">
            <h2 className="fw-bold">Our Story</h2>
            <p className="text-muted">Founded with a passion for design and a commitment to excellence, Freya Inc. has evolved from a small interior design firm to a major player in real estate development. We prioritize client needs, innovating at every step to deliver outstanding results.</p>
          </div>
        </div>
      </div>
    </section>

  

    {/* Contact Call-to-Action */}
    <section className="text-center py-5" style={{ backgroundColor: '#fff' }}>
  <div className="container">
    <h2 className="fw-bold mb-3">Get in Touch</h2>
    <p className="text-muted mb-4">Ready to start your journey with Freya Inc.? Contact us today to discuss your next project.</p>
    <a href="/contact" className="btn btn-secondary btn-lg" style={{ borderRadius: '25px' }}>
  Contact Us
</a>

  </div>
</section>

  </main>
);

export default AboutUs;
