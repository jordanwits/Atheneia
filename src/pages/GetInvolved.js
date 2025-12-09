import React from 'react';
import { Link } from 'react-router-dom';
import './GetInvolved.css';

const GetInvolved = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = '/#contact';
  };

  return (
    <div className="get-involved">
      {/* Hero */}
      <section className="get-involved-hero">
        <div className="container">
          <h1 className="page-title">Get Involved</h1>
          <p className="page-subtitle">
            Partner With Us to Bring Healing & Restoration
          </p>
        </div>
      </section>

      {/* Four Sections Grid */}
      <section className="get-involved-sections">
        <div className="container">
          <div className="sections-grid">
            {/* Give Section */}
            <div className="involvement-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
                </svg>
              </div>
              <h2 className="card-title">Give</h2>
              <p className="card-description">
                Your financial partnership enables us to bring healing and restoration to individuals, families, and communities.
              </p>
              <a 
                href="https://www.zeffy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-cta"
              >
                Donate Now
              </a>
            </div>

            {/* Partner Section */}
            <div className="involvement-card">
              <div className="card-icon">
                <img src="/handshakeBlue.png" alt="Handshake" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h2 className="card-title">Partner</h2>
              <p className="card-description">
                Join us as an organization partner to bring Kingdom health principles to your community, church, or workplace.
              </p>
              <Link to="/#contact" onClick={handleContactClick} className="card-cta">
                Partner with Us
              </Link>
            </div>

            {/* Volunteer Section */}
            <div className="involvement-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="card-title">Volunteer</h2>
              <p className="card-description">
                Serve with us through prayer, volunteer work, or hosting workshops in your area. Join our prayer team or volunteer service.
              </p>
              <Link to="/#contact" onClick={handleContactClick} className="card-cta">
                Get Started
              </Link>
            </div>

            {/* Host Workshop Section */}
            <div className="involvement-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="card-title">Host a Workshop</h2>
              <p className="card-description">
                Bring healing education and transformation to your community. We offer workshops on biblical health and practical stewardship.
              </p>
              <Link to="/#contact" onClick={handleContactClick} className="card-cta">
                Request a Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
