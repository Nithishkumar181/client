import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListCustomers.css';

function ListCustomers() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("https://lastbackends.onrender.com/bookings")
    .then(res => setBookings(res.data));
  }, []);

  return (
    <div class="so">
    <div className="container">
      <h2 style={{ color: 'white' }}>All Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Room ID</th><th>Name</th><th>Age</th><th>Address</th><th>Mobile</th><th>Aadhar</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td data-label="Room ID">{b.room_id}</td>
              <td data-label="Name">{b.customer_name}</td>
              <td data-label="Age">{b.customer_age}</td>
              <td data-label="Address">{b.customer_address}</td>
              <td data-label="Mobile">{b.customer_mobileNo}</td>
              <td data-label="Aadhar">{b.customer_aadharno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ListCustomers;
