import React, { useState, useEffect } from 'react';
import { api } from '../api';
import './MyBookings.css';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await api.request('/my-bookings');
      if (response.success) {
        setBookings(response.bookings);
      } else {
        setError(response.message || 'Failed to fetch bookings');
      }
    } catch (error) {
      setError(error.message || 'An error occurred while fetching bookings');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) {
      return;
    }

    try {
      const response = await api.request(`/booking/${bookingId}/cancel`, {
        method: 'PUT'
      });

      if (response.success) {
        // Update the booking status locally
        setBookings(bookings.map(booking => 
          booking._id === bookingId 
            ? { ...booking, status: 'cancelled' }
            : booking
        ));
      } else {
        setError(response.message || 'Failed to cancel booking');
      }
    } catch (error) {
      setError(error.message || 'An error occurred while canceling the booking');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'status-confirmed';
      case 'pending':
        return 'status-pending';
      case 'cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  if (loading) {
    return (
      <div className="bookings-container">
        <div className="loading">Loading your bookings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bookings-container">
        <div className="error-message">
          {error}
          <button onClick={fetchBookings} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="bookings-container">
        <div className="no-bookings">
          <h2>No Bookings Found</h2>
          <p>You haven't made any bookings yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bookings-container">
      <h2>My Bookings</h2>

      <div className="bookings-grid">
        {bookings.map(booking => (
          <div key={booking._id} className="booking-card">
            <div className="booking-header">
              <h3>Room {booking.room_id}</h3>
              <span className={`status ${getStatusColor(booking.status)}`}>
                {booking.status}
              </span>
            </div>

            <div className="booking-details">
              <div className="detail-row">
                <span className="label">Check In:</span>
                <span className="value">
                  {new Date(booking.check_in_date).toLocaleDateString()}
                </span>
              </div>
              <div className="detail-row">
                <span className="label">Check Out:</span>
                <span className="value">
                  {new Date(booking.check_out_date).toLocaleDateString()}
                </span>
              </div>
              <div className="detail-row">
                <span className="label">Duration:</span>
                <span className="value">
                  {Math.ceil((new Date(booking.check_out_date) - new Date(booking.check_in_date)) / (1000 * 60 * 60 * 24))} days
                </span>
              </div>
              {booking.total_amount && (
                <div className="detail-row">
                  <span className="label">Total:</span>
                  <span className="value">₹{booking.total_amount.toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className="booking-actions">
              {booking.status !== 'cancelled' && (
                <button
                  onClick={() => handleCancelBooking(booking._id)}
                  className="cancel-button"
                  disabled={booking.status === 'cancelled'}
                >
                  Cancel Booking
                </button>
              )}
              <button className="view-button">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;