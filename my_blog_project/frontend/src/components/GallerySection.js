import React from 'react';

const GallerySection = () => {
  return (
    <section className="text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h3 className="mb-4">Luxurious lifestyle in the Mansion</h3>
            <p className="mb-7">
              No matter the task, Freya Inc. is up for it. Cum sociis natoque
              penatibus et magnis dis parturient bee, nascetur ridiculus mus.
              Nulla vitae elit libero, pharetra. Integer posuere erat ante
              venenatis posuere velit aliquet. Etiam wagner moura porta malesuada
              magna mollis euismod mondar alu aflak.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <img className="w-100" src="http://localhost:8000/static/assets/img/img_14.jpg" alt="Mansion interior with luxurious decor" />
          </div>
          <div className="col-lg-6 mb-4">
            <img className="w-100" src="http://localhost:8000/static/assets/img/img_16.jpg" alt="Modern living room with stylish furniture" />
          </div>
          <div className="col-lg-6 mb-4">
            <img className="w-100" src="http://localhost:8000/static/assets/img/img_17.jpg" alt="Elegant dining area with a large table" />
          </div>
          <div className="col-12">
            <img className="w-100" src="http://localhost:8000/static/assets/img/img_15.jpg" alt="Exquisite bedroom with high-end furnishings" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
