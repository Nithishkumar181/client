import React from 'react'
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';


const Home = () => {
      const navigate=useNavigate();
       const { addToCart } = useCart();


const handleAddToCart = (room) => {
  addToCart(room);
  navigate('/cart');
};

  const rooms = [
    {
      id:1,
      title: 'KG Apartment = 1' ,
      image: 'https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.webp?a=1&b=1&s=612x612&w=0&k=20&c=UZ72TuOX4FJrasB3Ft5K7Lqzj8r2gTQubccH2CDLg2w=',
      description: 'Modern elegance met comfort, with high-tech amenities, soundproof walls, and a curated minibar.',
      price: 2999,
      displayPrice: '₹2,999 per night',
      
    },
    {
      id: 2,
      title: 'Ocean View Suite = 2',
      image: 'https://media.istockphoto.com/id/957080876/photo/dark-wooden-luxury-bedroom-corner.jpg?s=612x612&w=0&k=20&c=f3kUPd83oTdAOSQtE1dmJptztSqLJfgEYki4PN26A3A=',
      description: 'Wake up to the sound of waves in this luxurious suite with a panoramic sea view.',
      price: 4499,
      displayPrice: '₹4,499 per night',
    },
    {
      id: 3,
      title: 'KG Apartment = 3',
      image: 'https://thumbs.dreamstime.com/b/master-bedroom-presidential-suite-five-star-hotel-day-time-32794035.jpg?w=768',
      description: 'Modern elegance met comfort, with high-tech amenities, soundproof walls, and a curated minibar.',
      price: 2999,
      displayPrice: '₹2,999 per night',
    },
    {
      id: 4,
      title: 'Ocean View Suite = 4',
      image: 'https://thumbs.dreamstime.com/b/luxury-hotel-room-2-29598961.jpg?w=768',
      description: 'Wake up to the sound of waves in this luxurious suite with a panoramic sea view.',
      price: 4499,
      displayPrice: '₹4,499 per night',
    },
    {
      id: 5,
      title: 'KG Apartment = 5',
      image: 'https://media.gettyimages.com/id/184609057/photo/luxury-hotel-room.jpg?s=612x612&w=0&k=20&c=NN1OTddvUxGx-CNSHYe2SQvsV7diMg8AByIlnHM39Xw=',
      description: 'Modern elegance met comfort, with high-tech amenities, soundproof walls, and a curated minibar.',
      price: 2999,
      displayPrice: '₹2,999 per night',
    },
    {
      id: 6,
      title: 'Ocean View Suite = 6',
      image: 'https://thumbs.dreamstime.com/b/red-room-hotel-2217528.jpg?w=768',
      description: 'Wake up to the sound of waves in this luxurious suite with a panoramic sea view.',
      price: 4499,
      displayPrice: '₹4,499 per night',
    },
    {
      id: 7,
      title: 'KG Apartment = 7 ',
      image: 'https://thumbs.dreamstime.com/b/hotel-room-22008848.jpg?w=768',
      description: 'Modern elegance met comfort, with high-tech amenities, soundproof walls, and a curated minibar.',
      price: 2999,
      displayPrice: '₹2,999 per night',
    },
    {
      id: 8,
      title: 'Ocean View Suite = 8 ',
      image: 'https://thumbs.dreamstime.com/b/luxury-hotel-room-2-29598961.jpg?w=768',
      description: 'Wake up to the sound of waves in this luxurious suite with a panoramic sea view.',
      price: 4499,
      displayPrice: '₹4,499 per night',
    },
    {
      id: 9,
      title: 'KG Apartment = 9',
      image: 'https://thumbs.dreamstime.com/b/hotel-room-22007891.jpg?w=768',
      description: 'Modern elegance met comfort, with high-tech amenities, soundproof walls, and a curated minibar.',
      price: 2999,
      displayPrice: '₹2,999 per night',
    },
  ];

  const handleBookNow = (room) => {
    navigate('/Register', {
      state: room,
    });
  };


  return (
    <div className="bore">
         <Container>
        <Row>
  <Col>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
          alt="First slide"
          height={550}
        />
        <Carousel.Caption className="custom-caption">
          <p>Hospitality service with premium care</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop"
          alt="Second slide"
          height={550}
        />
        <Carousel.Caption className="custom-caption">
          <p>Our Deluxe Rooms are outfitted with stylish and comfortable furnishings with pleasing colors</p>
          <p>Comfort, service, elegance, always delivered</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop"
          alt="Third slide"
          height={550}
        />
        <Carousel.Caption className="custom-caption">
          <p>Deluxe rooms in hotels offer a step up from standard rooms</p>
          <p>Experience comfort, luxury, top hospitality</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Col>
</Row>
     <br/>
      <h2 style={{textAlign: 'center'}}>More of Our Specialties</h2>
 <div class="deluxe" > 
 <Col>
        {[
        'success',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '20rem' }}
          className="mb-2"
          >
          <Card.Header><h3>Daining Halls</h3></Card.Header>
          <Card.Body className="g-4 padding:auto">
            <Card.Title></Card.Title>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/162137765/photo/summer-swimming-pool.jpg?s=612x612&w=0&k=20&c=Wv3DeS8S-yygZpJ6eE90iu7861DRVd177MlGTZVWd1I=
"
            height={205} />
          </Card.Body >
        </Card> 
      ))}
</Col>
<Row>
<Col>
        {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '20rem' }}
          className="mb-2"
          >
          <Card.Header><h3>Daining Halls</h3></Card.Header>
          <Card.Body class="g-4 padding:auto">
            <Card.Title></Card.Title>
            <Card.Img variant="top" src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1754/SHEGS-P071-Xin-Feng-Tian-Restaurant.jpg/SHEGS-P071-Xin-Feng-Tian-Restaurant.16x9.jpg?imwidth=1280"
            height={205} />
          </Card.Body >
        </Card> 
      ))}
</Col>
</Row>
  <Row>
<Col>
        {[
        'Warning',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '20rem' }}
          className="mb-2"
          >
          <Card.Header><h3>Party Halls</h3></Card.Header>
          <Card.Body class="g-4 padding:auto">
            <Card.Img variant="top" src="https://media.eventective.com/3654446.jpg"  height={209}/>
          </Card.Body >
        </Card> 
      ))}
        </Col>
  </Row>
  <Row>
        <Col>
        {[
        'Info',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '20rem' }}
          className="mb-2"
          >
          <Card.Header><h3>Meeting Halls</h3></Card.Header>
          <Card.Body class="g-4 padding:auto">
            <Card.Img variant="top" src="https://www.conradpune.com/wp-content/uploads/elementor/thumbs/Screenshot-2022-08-09-at-8.34.22-AM-pszp675aqrg6jsdau96vkkfzwr6rwzj3n4d6eebhxw.png" 
            height={210}/>
          </Card.Body >
        </Card> 
      ))}</Col>
  </Row>
 </div>
        <h1>Available Rooms</h1>
       <Container className="mt-4">
      <Row>
        {rooms.map((room) => (
          <Col md={6} lg={4} key={room.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={room.image}
                alt={room.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{room.title}</Card.Title>
                <Card.Text>{room.description}</Card.Text>
                <Card.Text><strong>{room.displayPrice}</strong></Card.Text>
                <div className="d-flex justify-content-between">
                 <Button variant="primary" onClick={() => handleAddToCart(room)}>Add to Cart</Button>

                  <Button variant="success" onClick={() => handleBookNow(room)}>Book Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
      <br/>
      <div>
<footer>
  
<div className="first">
<h1>Contact Us</h1>
      <h4>Luxury Stay Hotel</h4>
      <p>Experience the finest in hospitality and comfort.</p>
      <p>📍 123 Royal Avenue, Ooty, CA</p>
      <p>📞 +91 98467 84529</p>
      <p>✉️ contact@luxurystay.com</p>
      <h4 >Connect With Us</h4>
      <p>facebook / Twitter / Instagram</p>
     @2025 Luxury Stay Hotel. All rights reserved.
 </div>
</footer>
</div>
</Container>
</div>
  )
}

export default Home
