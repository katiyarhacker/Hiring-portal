import React from "react";

const Employer = () => {

  return (
    <div className="Employer-container">
      <div className="employer-content">
         <div className="flex justify-center mb-4">
                    <img
                        src="/assets/Logo.png"
                        alt="Hiring Portal Logo"
                        className="auth-logo"
                    />
                </div>
        {/* Company Header */}
        <div className="employer-img-box">
          <img
            src="https://via.placeholder.com/100"
            alt="company"
            className="employer-img"
          />

          <div>
            <h2 className="comp-name">Tech Solutions Pvt Ltd</h2>
            <p className="comp-para">Software Company</p>
          </div>
        </div>

        {/* Company Info */}
        <div className="comp-info-box">
          <h3 className="comp-about">About Company</h3>
          <p>
            We provide web development solutions using modern technologies.
          </p>
        </div>

        {/* Contact */}
        <div className="comp-contact-box">
          <h3 className="comp-contact-heading">Contact Details</h3>
          <p>Email: hr@techsolutions.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Website: www.techsolutions.com</p>
        </div>

        <button className="button">
          Edit Company Profile
        </button>

      </div>
    </div>
  );
};

export default Employer;
