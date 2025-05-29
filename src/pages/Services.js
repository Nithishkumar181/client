import React from 'react'
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hotelservices = () => {
  return (
    <div class="back">
      <h1 >🏨Hotel Management Services</h1>
      <Container>
       <Row>
        <Col>
        <div class="super">
        <img  src="https://em-content.zobj.net/thumbs/240/apple/354/cook_1f9d1-200d-1f373.png"
         width="150" height="200" alt="Food Service Man Emoji"></img>
         <n> Room service 🍽️ brings delicious food and drinks right to your door
           🛎️ —from cozy breakfasts 🥐☕ to late-night bites 🍕 and elegant dinners 
           🍷🍝, just one call away 📞.</n>
           </div>
        </Col>
        <Col>
        <div class="best">
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/24-hours-service-3768048-3140740.png?f=webp&w=512" 
     width="150" height="200" alt="Hotel Emoji"></img>
         <i>You're never without support 📞🛎️ — anytime, anywhere! room service 🍽️, transportation 🚖, or just have a quick question ❓
           We believe in comfort, convenience 🛏️✨.</i>
           </div>
        </Col>
      </Row><br/>
      <Row>
        <Col>
        <div class="super">
        <img  src="https://cdn-icons-png.freepik.com/256/5365/5365797.png?ga=GA1.1.1710819609.1745591831&semt=ais_hybrid"
         width="120" height="200" alt="Food Service Man Emoji"></img>
         <n>Our 🏨 hotel management team is always ready to respond to emergencies 🚨, 
          providing immediate support 📞🛠️, from 👨‍⚕️.we’re here 24/7🕒.Always prepared, always there!</n>
           </div>
        </Col> 
        <Col>
        <div class="super">
        <img  src="https://cdn-icons-png.freepik.com/256/4565/4565262.png?ga=GA1.1.1710819609.1745591831&semt=ais_hybrid"
         width="150" height="200" alt="Food Service Man Emoji"></img>
         <n>Our hotel offers seamless Wi-Fi 🌐 for guests, ensuring fast and reliable connections 📶. 
          Stay connected 💻, browse easily 🖱️,   🛎️ throughout your stay 🏨. Always online!</n>
           </div>
        </Col>
      </Row><br/>
      <Row>
        <Col>
        <div class="hot">
        <img  src="https://cdn-icons-png.freepik.com/256/14397/14397681.png?ga=GA1.1.1710819609.1745591831&semt=ais_hybrid"
         width="120" height="200" alt="Food Service Man Emoji"></img>
         <n>Our hotel offers convenient cab services 🚖,🚗. Whether it's airport transfers
           ✈️ or local sightseeing 🗺️, we’ve got you covered, 24/7 for your comfort 🏨.</n>
           </div>
        </Col>
        <Col>
        <div class="light">
        <img  src="https://cdn-icons-png.freepik.com/256/6265/6265615.png?ga=GA1.1.1710819609.1745591831&semt=ais_hybrid"
         width="150" height="200" alt="Food Service Man Emoji"></img>
         <n>Our hotel provides reliable electrical maintenance ⚡,
          From 🛠️ lighting 💡 to power systems 🔌, we prioritize safety and comfort for all guests 🏨,
           day or night 🌙.</n>
           </div>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Hotelservices
