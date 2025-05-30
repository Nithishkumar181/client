import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear any previous error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="about-container">
      <section className="about-section">
        <h1>Welcome to NK Luxury Hotel</h1>
        <p className="about-description">
          Experience unparalleled luxury and comfort at NK Luxury Hotel. 
          Our commitment to excellence ensures that every stay is memorable, 
          whether you're here for business or pleasure. With world-class amenities 
          and exceptional service, we strive to exceed your expectations.
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        {submitted ? (
          <div className="success-message">
            <h3>Thank you for reaching out!</h3>
            <p>We'll get back to you soon.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="send-another-btn"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                required
                disabled={isLoading}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>🕒 Check-in/Check-out Times</h3>
            <p>Check-in is from 2 PM and check-out is by 11 AM. Early check-in and late check-out can be arranged based on availability.</p>
          </div>

          <div className="faq-item">
            <h3>✈️ Airport Transfers</h3>
            <p>We provide comfortable airport transfers at competitive rates. Please contact our concierge to arrange your pickup.</p>
          </div>

          <div className="faq-item">
            <h3>🍳 Breakfast Information</h3>
            <p>Complimentary breakfast buffet is included with all room bookings, served from 6:30 AM to 10:30 AM daily.</p>
          </div>

          <div className="faq-item">
            <h3>🏊‍♂️ Amenities</h3>
            <p>Enjoy our pool, spa, fitness center, and restaurants. Room service is available 24/7 for your convenience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
