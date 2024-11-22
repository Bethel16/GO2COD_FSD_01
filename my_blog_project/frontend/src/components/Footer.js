import React from 'react';

const Footer = () => {
  return (
    <>
      <section className="bg-300 py-4 fs-1 text-center">
        <div className="container">
          <a className="d-inline-block px-2 text-900 fs-1" href="me.html">
            <span className="fab fa-facebook-f" data-fa-transform="shrink-2"></span>
          </a>
          <a className="d-inline-block px-2 text-900 fs-1" href="me.html">
            <span className="fab fa-twitter" data-fa-transform="shrink-2"></span>
          </a>
          <a className="d-inline-block px-2 text-900 fs-1" href="me.html">
            <span className="fab fa-instagram" data-fa-transform="shrink-2"></span>
          </a>
        </div>
      </section>

      <footer className="bg-primary text-center py-6">
        <div className="container">
          <p className="text-uppercase text-300 ls mb-3">
            Freya Incorporated, 019 Appellation Ave, New Jersey, 535-118-7056
          </p>
          <p className="text-700 mb-0">
            Template by{' '}
            <a className="text-600" href="https://themewagon.com/" target="_blank" rel="noopener noreferrer">
              Themewagon
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
