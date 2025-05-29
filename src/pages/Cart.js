import React from 'react';
import { useCart } from '../Context/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
 
  return (
    <Container className="mt-4">
      <h2 style={{ color: 'white' }}>Your Cart</h2>
      <Row>
        {cartItems.length === 0 ? (
          <p style={{ color: 'white' }}>No rooms in cart.</p>
        ) : (
          cartItems.map((item) => (
            <Col md={6} lg={4} key={item.id} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> {item.price}
                    <br />
                    <strong>Quantity:</strong> {item.quantity}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove One
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Cart;
