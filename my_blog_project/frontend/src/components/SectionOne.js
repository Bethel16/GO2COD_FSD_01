import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/theme.min.css';
import '../assets/css/user.min.css';

const SectionOne = () => {
  return (
    <section className="py-0 text-white overflow-hidden">
      <div className="bg-holder overlay overlay-freya" style={{ backgroundImage: 'url(http://localhost:8000/static/assets/img/header_1.jpg), url(http://localhost:8000/static/assets/img/header_2.jpg), url(http://localhost:8000/static/assets/img/header_3.jpg)' }} 
      data-parallax="data-parallax"></div>
      <div className="container">
        <div className="row min-vh-100 justify-content-start align-items-end pt-11 pb-6" data-zanim-timeline="{}" data-zanim-trigger="scroll">
          <div className="col">
            <div className="row align-items-end">
              <div className="col-lg">
                <div className="overflow-hidden">
                  <p className="mb-1 text-uppercase ls" data-zanim-xs='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.1}'>AvePoint Richmond</p>
                </div>
                <div className="overflow-hidden">
                  <h2 className="text-white fw-normal mb-4 mb-lg-0" data-zanim-xs='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0}'>More livable spaces</h2>
                </div>
              </div>
              <div className="col text-lg-end">
                <div className="overflow-hidden">
                  <div data-zanim-xs='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.2}'>
                    <a className="btn btn-sm btn-outline-white" href="index.html">More about Freya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
