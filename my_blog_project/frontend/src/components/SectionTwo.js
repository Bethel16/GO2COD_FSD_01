// src/components/SectionTwo.js
import React from 'react';
const services = [
    {
      title: "Residential",
      description: "From Manitoba to Brooklyn, affordable, comfortable and livable houses for families of all shapes and sizes are covered by us.",
      img: "http://localhost:8000/static/assets/img/img_1.jpg"
    },
    {
      title: "Commercial",
      description: "We have also designed interiors for restaurants, bars, and office spaces.",
      img: "http://localhost:8000/static/assets/img/img_2.jpg"
    },
    {
      title: "Hospitality",
      description: "You need your guests to have an unforgettable experience, and Freya Inc. is ready to deliver.",
      img: "http://localhost:8000/static/assets/img/img_3.jpg"
    }
  ];
  
const SectionTwo = () => (
  <section className="py-5">
    <div className="container">
      <h3 className="text-center mb-4">Our Services</h3>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={service.img} alt={`${service.title}`} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionTwo;
