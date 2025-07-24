import React from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../css/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h4>CONTACT</h4>
      <h2>Let's Talk, Hit me up! 👇</h2>
      <div className="contact-info">
        <div className="info-box">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h5>Location</h5>
            <p>Lahore, Pakistan</p>
          </div>
        </div>
        <div className="info-box">
          <FaEnvelope className="contact-icon" />
          <div>
            <h5>Mail</h5>
            <p>m.salman123@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
