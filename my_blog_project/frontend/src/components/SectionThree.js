import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/theme.min.css';
import '../assets/css/user.min.css';
const SectionThree = () => {
  return (
    <section className="py-10 overflow-hidden text-center" data-zanim-timeline="{}" data-zanim-trigger="scroll">
      <div className="bg-holder overlay overlay-1" style={{ backgroundImage: 'url(http://localhost:8000/static/assets/img/img_1.jpg)' }} data-parallax="data-parallax" data-rellax-percentage="0.5"></div>
      <div className="container">
        <div className="overflow-hidden">
          <h1 className="fs-5 fs-sm-6 text-white mb-3" data-zanim-xs='{"delay":0}'>Museo</h1>
        </div>
        <div className="overflow-hidden">
          <h4 className="ls fw-light text-uppercase text-300 mb-0" data-zanim-xs='{"delay":0.1}'>Manitoba</h4>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
