import React from 'react';

const ServicesSection = () => { 
    return (
        <div className="services-section">
            <h2 className="services-heading fade-in">Our Services</h2>
            <p className="services-description">
                From buying your dream car to keeping it in top condition, we offer everything you need.
            </p>
            <div className="services-list">
                <div className="service-item">
                    <h3>Car Sales</h3>
                    <p>Helping you find the perfect car.</p>
                </div>
                <div className="service-item">
                    <h3>Test Drives</h3>
                    <p>Experience your future car today.</p>
                </div>
                <div className="service-item">
                    <h3>Financing</h3>
                    <p>Easy payment plans and loans.</p>
                </div>
                <div className="service-item">
                    <h3>Car Maintenance</h3>
                    <p>Service and repair to keep your car running smoothly.</p>
                </div>
                <div className="service-item">
                    <h3>Trade-In</h3>
                    <p>Get the best value for your old car.</p>
                </div>
                <div className="service-item">
                    <h3>Customization</h3>
                    <p>Personalize your vehicle with accessories.</p>
                </div>
            </div>
            <button className="services-button">Contact us today for more details!</button>
        </div>
    );
}

export default ServicesSection;
