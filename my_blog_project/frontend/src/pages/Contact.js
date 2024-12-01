import React from 'react';
import NavBar from '../components/NavBar';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-9 overflow-hidden text-center" data-zanim-timeline="{}" data-zanim-trigger="scroll">
        <div className="bg-holder overlay overlay-1" style={{ backgroundImage: 'url(http://localhost:8000/static/assets/img/header_1.jpg)' }} data-parallax="data-parallax"></div>
        <div className="container">
          <div className="overflow-hidden">
            <h1 className="fs-5 fs-sm-6 text-white mb-3" data-zanim-xs='{"delay":0}'>Hire Us</h1>
          </div>
          <div className="overflow-hidden">
            <p className="fs-2 fw-light ls text-400 text-uppercase" data-zanim-xs='{"delay":0.1}'>We're Here for You</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main" id="top">
        <div className="" id="">
          <div className="loader-box">
            <div className="loader"></div>
          </div>
        </div>

        {/* Contact Form and Information */}
        <section>
          <div className="container">
            <div className="row">
              {/* Office Details */}
              <div className="col-lg-4 pe-lg-6">
                <div className="row">
                  <div className="col-md-4 col-lg-12 mb-4">
                    <h5 className="mb-2">Manitoba Office</h5>
                    121 King's Street,<br />
                    Manitoba 1230, Canada<br />
                    Cell: <a href="tel:+47535383458">+475 3538 3458</a>
                  </div>
                  <div className="col-md-4 col-lg-12 mb-4">
                    <h5 className="mb-2">Brooklyn Office</h5>
                    62 Collins Street West,<br />
                    Brooklyn 3030, USA<br />
                    Cell: <a href="tel:+47523433421">+475 2343 3421</a>
                  </div>
                  <div className="col-md-4 col-lg-12">
                    <h4 className="mb-2">Socials</h4>
                    <a className="mt-2" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-linkedin fs-2 me-2 text-primary" data-fa-transform="shrink-1"></span></a>
                    {/* More social icons */}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg mt-4 mt-lg-0">
                <form>
                  <div className="row">
                    <div className="col-12">
                      <input className="form-control" type="text" placeholder="Your Name" required="required" />
                    </div>
                    <div className="col-12 mt-4">
                      <input className="form-control" type="email" placeholder="Email" required="required" />
                    </div>
                    <div className="col-12 mt-4">
                      <textarea className="form-control" rows="6" placeholder="Enter your descriptions here..." required="required"></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button className="btn btn-primary" type="submit">
                        <span className="text-white fw-semi-bold">Send Now</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Google Map */}
              <div className="col-12 mt-8">
                <div className="googlemap" data-latlng="48.8583701,2.2922873,17" data-scrollwheel="false" data-icon="../assets/img/map-marker.png" data-zoom="13" data-theme="Default" style={{ minHeight: '350px' }}>
                  <div className="marker-content py-3">
                    <h5>Eiffel Tower</h5>
                    <p>Gustave Eiffel's iconic, wrought-iron 1889 tower,<br /> with steps and elevators to observation decks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-center py-6">
        <div className="container">
          <p className="text-uppercase text-300 ls mb-3">Freya Incorporated, 019 Appellation Ave, New Jersey, 535-118-7056</p>
          <p className="text-700 mb-0">Template by <a className="text-600" href="https://themewagon.com/" target="_blank" rel="noopener noreferrer">Themewagon</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
