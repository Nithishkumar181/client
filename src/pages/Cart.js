import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');
  const navigate = useNavigate();

  // Calculate total price
  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    setCheckoutError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/register');
    } catch (error) {
      setCheckoutError('Failed to process checkout. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <Container className="empty-cart-container">
        <div className="empty-cart">
          <i className="fas fa-shopping-cart fa-3x"></i>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any rooms to your cart yet.</p>
          <Button 
            variant="primary" 
            onClick={() => navigate('/home')}
            className="continue-shopping"
          >
            Continue Browsing
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <p>{cartItems.length} item(s)</p>
      </div>

      {checkoutError && (
        <Alert variant="danger" className="mb-4">
          {checkoutError}
        </Alert>
      )}

      <Row>
        <Col lg={8}>
          <div className="cart-items">
            {cartItems.map((item) => (
              <Card key={item.id} className="cart-item">
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-image"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <Card.Title>{item.title}</Card.Title>
                        <Button
                          variant="link"
                          className="remove-button"
                          onClick={() => removeFromCart(item.id)}
                          disabled={isCheckingOut}
                        >
                          ×
                        </Button>
                      </div>
                      <Card.Text>{item.description}</Card.Text>
                      <div className="price-quantity">
                        <span className="price">{item.price}</span>
                        <span className="quantity">Quantity: {item.quantity}</span>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </Col>

        <Col lg={4}>
          <Card className="cart-summary">
            <Card.Body>
              <h3>Order Summary</h3>
              <div className="summary-details">
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Taxes</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
                <hr />
                <div className="summary-total">
                  <span>Total</span>
                  <span>${(total * 1.1).toFixed(2)}</span>
                </div>
              </div>
              <Button
                variant="primary"
                className="checkout-button"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
