import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "https://em-content.zobj.net/thumbs/240/apple/354/cook_1f9d1-200d-1f373.png",
      title: "Room Service",
      description: "Room service 🍽️ brings delicious food and drinks right to your door. From cozy breakfasts 🥐☕ to late-night bites 🍕 and elegant dinners 🍷🍝, just one call away 📞."
    },
    {
      icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/24-hours-service-3768048-3140740.png?f=webp&w=512",
      title: "24/7 Support",
      description: "You're never without support 📞🛎️ — anytime, anywhere! Room service 🍽️, transportation 🚖, or just have a quick question ❓ We believe in comfort and convenience 🛏️✨."
    },
    {
      icon: "https://cdn-icons-png.freepik.com/256/5365/5365797.png",
      title: "Emergency Support",
      description: "Our 🏨 hotel management team is always ready to respond to emergencies 🚨, providing immediate support 📞🛠️. We're here 24/7 🕒. Always prepared, always there!"
    },
    {
      icon: "https://cdn-icons-png.freepik.com/256/4565/4565262.png",
      title: "Free Wi-Fi",
      description: "Our hotel offers seamless Wi-Fi 🌐 for guests, ensuring fast and reliable connections 📶. Stay connected 💻, browse easily 🖱️ throughout your stay 🏨."
    },
    {
      icon: "https://cdn-icons-png.freepik.com/256/14397/14397681.png",
      title: "Transportation",
      description: "Our hotel offers convenient cab services 🚖🚗. Whether it's airport transfers ✈️ or local sightseeing 🗺️, we've got you covered, 24/7 for your comfort 🏨."
    },
    {
      icon: "https://cdn-icons-png.freepik.com/256/6265/6265615.png",
      title: "Maintenance",
      description: "Our hotel provides reliable electrical maintenance ⚡. From 🛠️ lighting 💡 to power systems 🔌, we prioritize safety and comfort for all guests 🏨."
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>🏨 Hotel Management Services</h1>
        <p>Experience luxury and comfort with our comprehensive range of services</p>
      </div>

      <Container>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} key={index}>
              <div className="service-card">
                <div className="service-icon">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    width="80"
                    height="80"
                  />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
