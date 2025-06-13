import React from 'react';
import heroImage from '../../../assets/imgs/hero-img.png';

function Hero() {
  return (
    <div id='home' className="bg-light py-5">
      <div className="container py-4">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0 hero-text">
            <span className="badge bg-success-subtle text-success fw-semibold mb-3 px-3 py-2 fs-6 rounded-pill shadow-sm">
              📈 High-Yield Agriculture Investment
            </span>

            <h1 className="display-5 fw-bold lh-sm">
              Invest in Pigs,<br />
              <span style={{
                background: 'linear-gradient(to right, #198754, #28a745)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Earn Up to 60% ROI
              </span>
            </h1>

            <p className="lead text-muted mt-3">
              🐷 Start your journey in pig farming. Watch them grow, harvest profits, and enjoy a transparent experience — hassle-free.
            </p>

            <a
              href="#plans"
              className="btn btn-success btn-lg mt-4 px-4 py-2 rounded-pill d-inline-flex align-items-center shadow-sm hero-btn"
            >
              🐖 <span className="ms-2">Start Investing</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center">
            <img
              src={heroImage}
              alt="Pig and money tree"
              className="img-fluid hero-img animated-float"
              style={{
                maxHeight: '480px',
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
