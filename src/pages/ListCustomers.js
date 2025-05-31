import React, { useEffect, useState } from 'react';
import { api } from '../api';
import './ListCustomers.css';

function ListCustomers() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
    const fetchBookings = async () => {
      try {
        const response = await api.getBookings();
        setBookings(response.bookings || []);
        setError(null);
      } catch (err) {
        setError('Failed to load bookings. Please try again later.');
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
=======
    axios.get("https://lastbackends.onrender.com/bookings")
    .then(res => setBookings(res.data));
>>>>>>> e917f14f3fe629bb650af9f53e8ce86f240a203e
  }, []);

  if (loading) {
    return (
      <div className="so">
        <div className="container">
          <h2 style={{ color: 'white' }}>Loading bookings...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="so">
        <div className="container">
          <h2 style={{ color: 'white' }}>Error</h2>
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="so">
      <div className="container">
        <h2 style={{ color: 'white' }}>All Bookings</h2>
        {bookings.length === 0 ? (
          <p style={{ color: 'white' }}>No bookings found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Room ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Mobile</th>
                <th>Aadhar</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td data-label="Room ID">{booking.room_id}</td>
                  <td data-label="Name">{booking.customer_name}</td>
                  <td data-label="Age">{booking.customer_age}</td>
                  <td data-label="Address">{booking.customer_address}</td>
                  <td data-label="Mobile">{booking.customer_mobileNo}</td>
                  <td data-label="Aadhar">{booking.customer_aadharno}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ListCustomers;
