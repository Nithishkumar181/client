import React, { useState } from 'react';
import styles from './AboutPage.module.css';


const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
   <div className="full">
    <div className={styles.container}>
      <section className={styles.about}>
        <h1>About Our Hotel</h1>
        <p>
          Welcome to NK luxury Hotel – your perfect getaway destination. Our hotel combines luxury, comfort, and
          top-notch service to provide you a memorable experience. Whether you're here for leisure or business, we offer
          the best-in-class amenities.
        </p>
      </section>

      <section className={styles.contact}>
        <h2>Contact Us</h2>
        {submitted && <p className={styles.success}>Thank you for reaching out!</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>Q: What time is check-in/check-out?</strong>
            <p>A: Check-in is from 2 PM and check-out is by 11 AM.</p>
          </li>
          <li>
            <strong>Q: Do you offer airport pickup?</strong>
            <p>A: Yes, we provide airport transfers at an additional cost.</p>
          </li>
          <li>
            <strong>Q: Is breakfast included?</strong>
            <p>A: Complimentary breakfast is included in all room bookings.</p>
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default AboutPage;
